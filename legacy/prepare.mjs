import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('public/legacy-angularjs', {recursive:true});
for (const name of ['index.html','app.js']) await copyFile(`legacy/angularjs/${name}`, `public/legacy-angularjs/${name}`);
await copyFile('node_modules/angular/angular.min.js','public/legacy-angularjs/angular.min.js');
