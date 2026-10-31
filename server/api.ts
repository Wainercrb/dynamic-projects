import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

declare module 'express-session' {
  interface SessionData {
    user?: string;
    csrf?: string;
  }
}
interface Account {
  salt: Buffer;
  hash: Buffer;
}
export function createApi() {
  const api = express();
  const production = process.env['NODE_ENV'] === 'production';
  const secret = process.env['SESSION_SECRET'];
  if (production && (!secret || secret.length < 32))
    throw new Error('SESSION_SECRET requiere al menos 32 caracteres en producción');
  const accounts = new Map<string, Account>();
  api.disable('x-powered-by');
  // El laboratorio vive en una sola instancia; las cuentas y sesiones son efímeras.
  api.use(helmet({ contentSecurityPolicy: false }));
  api.use(express.json({ limit: '8kb' }));
  api.use(
    session({
      name: 'lab.sid',
      secret: secret || randomBytes(32).toString('hex'),
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, sameSite: 'strict', secure: production, maxAge: 30 * 60 * 1000 },
    }),
  );
  api.use((_req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });
  api.use((req, res, next) => {
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
    const origin = req.get('origin');
    const expected = process.env['APP_ORIGIN'] || `${req.protocol}://${req.get('host')}`;
    if (
      !origin ||
      origin !== expected ||
      !req.session.csrf ||
      req.get('x-xsrf-token') !== req.session.csrf
    ) {
      res.status(403).json({ error: 'CSRF u origen inválido' });
      return;
    }
    next();
  });
  const csrf = (req: express.Request, res: express.Response) => {
    req.session.csrf ||= randomBytes(32).toString('hex');
    res.cookie('XSRF-TOKEN', req.session.csrf, {
      sameSite: 'strict',
      secure: production,
      httpOnly: false,
      path: '/',
    });
    return req.session.csrf;
  };
  api.get('/csrf', (req, res) => {
    res.json({ token: csrf(req, res) });
  });
  api.get('/session', (req, res) => {
    csrf(req, res);
    res.json({ user: req.session.user || null });
  });
  api.use(
    ['/register', '/login'],
    rateLimit({ windowMs: 60_000, limit: 20, standardHeaders: 'draft-8', legacyHeaders: false }),
  );
  api.post('/register', (req, res) => {
    const { username, password } = req.body || {};
    if (
      typeof username !== 'string' ||
      !/^[a-zA-Z0-9_-]{3,40}$/.test(username) ||
      typeof password !== 'string' ||
      password.length < 12 ||
      password.length > 128
    ) {
      res
        .status(400)
        .json({ error: 'Usuario de 3–40 caracteres y contraseña de 12–128 caracteres requeridos' });
      return;
    }
    if (accounts.has(username)) {
      res.status(409).json({ error: 'Usuario ya registrado' });
      return;
    }
    const salt = randomBytes(16);
    accounts.set(username, { salt, hash: scryptSync(password, salt, 64) });
    res.status(201).json({ registered: true });
  });
  api.post('/login', (req, res, next) => {
    const { username, password } = req.body || {};
    if (typeof username !== 'string' || typeof password !== 'string' || password.length > 128) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }
    const account = accounts.get(username);
    const hash = scryptSync(password, account?.salt || Buffer.alloc(16), 64);
    if (!account || !timingSafeEqual(hash, account.hash)) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }
    req.session.regenerate((error) => {
      if (error) return next(error);
      req.session.user = username;
      csrf(req, res);
      req.session.save((error) => {
        if (error) return next(error);
        res.json({ user: username });
      });
    });
  });
  api.get('/private', (req, res) => {
    if (!req.session.user) {
      res.status(401).json({ error: 'Sesión requerida' });
      return;
    }
    res.json({ message: `Datos privados de ${req.session.user}` });
  });
  api.post('/logout', (req, res, next) => {
    req.session.destroy((error) => {
      if (error) return next(error);
      res.clearCookie('lab.sid', { path: '/' });
      res.clearCookie('XSRF-TOKEN', { path: '/' });
      res.status(204).end();
    });
  });
  api.use((_req, res) => {
    res.status(404).json({ error: 'Ruta API inexistente' });
  });
  api.use(
    (error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      const status = error instanceof SyntaxError ? 400 : 500;
      res.status(status).json({ error: status === 400 ? 'JSON inválido' : 'Error interno' });
    },
  );
  return api;
}
