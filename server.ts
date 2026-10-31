import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApi } from './server/api';
const folder = dirname(fileURLToPath(import.meta.url));
const browserFolder = resolve(folder, '../browser');
const app = express();
app.disable('x-powered-by');
app.use('/api', createApi());
app.use(express.static(browserFolder, { maxAge: '1h', index: false, redirect: false }));
const angular = new AngularNodeAppEngine();
app.use((req, res, next) => {
  angular
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});
if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] || 4000);
  app.listen(port, '127.0.0.1', () => console.log(`SSR y API listos en puerto ${port}`));
}
export const reqHandler = createNodeRequestHandler(app);
