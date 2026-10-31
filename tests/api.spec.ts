import { test } from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import { createApi } from '../server/api';
import { once } from 'node:events';

test('API: sesión, contraseñas, CSRF, origen y autorización', async (t) => {
  const app = express();
  app.use('/api', createApi());
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(
    () =>
      new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      ),
  );
  const address = server.address();
  assert(address && typeof address !== 'string');
  const base = `http://127.0.0.1:${address.port}`;
  const jar = new Map<string, string>();
  async function request(path: string, body?: unknown, headers: Record<string, string> = {}) {
    const response = await fetch(base + '/api' + path, {
      method: body === undefined ? 'GET' : 'POST',
      headers: {
        cookie: [...jar].map(([k, v]) => `${k}=${v}`).join('; '),
        'content-type': 'application/json',
        origin: base,
        'x-xsrf-token': decodeURIComponent(jar.get('XSRF-TOKEN') || ''),
        ...headers,
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    for (const cookie of response.headers.getSetCookie()) {
      const [pair] = cookie.split(';');
      const split = pair.indexOf('=');
      jar.set(pair.slice(0, split), pair.slice(split + 1));
    }
    return response;
  }
  const account = { username: 'test_user', password: 'Correct-password-123' };
  await t.test('deniega datos sin sesión', async () => {
    assert.equal((await request('/private')).status, 401);
  });
  await t.test('emite cookie HttpOnly y token CSRF', async () => {
    const res = await request('/csrf');
    assert.equal(res.status, 200);
    assert(
      res.headers
        .getSetCookie()
        .some(
          (c) => c.includes('lab.sid=') && c.includes('HttpOnly') && c.includes('SameSite=Strict'),
        ),
    );
  });
  await t.test('rechaza origen ajeno y token CSRF incorrecto', async () => {
    assert.equal(
      (await request('/register', account, { origin: 'https://attacker.invalid' })).status,
      403,
    );
    assert.equal((await request('/register', account, { 'x-xsrf-token': 'invalid' })).status, 403);
  });
  await t.test('valida usuario y longitud de contraseña', async () => {
    assert.equal(
      (await request('/register', { username: '<script>', password: 'short' })).status,
      400,
    );
  });
  await t.test('registra y evita duplicados', async () => {
    assert.equal((await request('/register', account)).status, 201);
    assert.equal((await request('/register', account)).status, 409);
  });
  await t.test('rechaza contraseña incorrecta', async () => {
    assert.equal((await request('/login', { ...account, password: 'wrong-password' })).status, 401);
  });
  await t.test('inicia sesión, rota identificador y autoriza datos', async () => {
    const old = jar.get('lab.sid');
    assert.equal((await request('/login', account)).status, 200);
    assert.notEqual(jar.get('lab.sid'), old);
    assert.equal((await request('/session')).status, 200);
    const res = await request('/private');
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { message: 'Datos privados de test_user' });
    assert.equal(res.headers.get('cache-control'), 'no-store');
    assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
  });
  await t.test('otra sesión no hereda acceso', async () => {
    assert.equal((await fetch(base + '/api/private')).status, 401);
  });
  await t.test('logout invalida también la cookie robada anterior', async () => {
    const cookie = [...jar].map(([k, v]) => `${k}=${v}`).join('; ');
    assert.equal((await request('/logout', {})).status, 204);
    assert.equal((await fetch(base + '/api/private', { headers: { cookie } })).status, 401);
  });
  await t.test('limita intentos de login', async () => {
    await request('/csrf');
    let status = 0;
    for (let i = 0; i < 21; i++)
      status = (await request('/login', { username: 'nobody', password: 'invalid-password' }))
        .status;
    assert.equal(status, 429);
  });
});
