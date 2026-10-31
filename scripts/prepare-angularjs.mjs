import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('public/examples/angularjs', { recursive: true });
for (const name of ['index.html', 'app.js'])
  await copyFile(`examples/angularjs/${name}`, `public/examples/angularjs/${name}`);
await copyFile('node_modules/angular/angular.min.js', 'public/examples/angularjs/angular.min.js');
