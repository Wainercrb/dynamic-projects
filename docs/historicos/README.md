# Preguntas antiguas aplicadas

La aplicación principal usa Angular **22.2.4**, CLI/build **22.2.5** y TypeScript **6.0.3**. AngularJS 1.8.3 se ejecuta en un documento independiente: no se mezclan ambos runtimes en la misma página.

| Preguntas  | Implementación                                                                                    | Cómo comprobar                                                     |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 3          | `examples/angularjs/`: controlador, ng-model, ng-repeat y ng-if                                   | En Angular clásico, abrir el enlace a AngularJS y editar el nombre |
| 12, 27, 28 | `src/app/angular-clasico/module.ts`: declarations, imports, RouterModule.forChild y NgModule lazy | Navegar a Angular clásico                                          |
| 14, 15     | *ngIf, *ngFor, ngClass y ngStyle reales                                                           | Filtrar temas y alternar la lista clásica                          |
| 37, 38     | `tests/angularjs/angularjs.spec.js` y `karma.conf.cjs`                                            | `npm run test:angularjs`: 2 pruebas Jasmine/Karma                  |
| 39         | `examples/protractor/`: test real con selectores by.model y by.repeater                           | ChromeDriver en puerto 9515 y `npm run test:protractor`            |

`npm run prepare:angularjs` copia el runtime AngularJS instalado por npm y el ejemplo a `public/examples/angularjs`; se ejecuta automáticamente antes de start y build. No depende de un CDN.

## Protractor

Con `npm start` activo y ChromeDriver compatible con el navegador:

```sh
chromedriver --port=9515
CHROMIUM_PATH=/ruta/al/chromium npm run test:protractor
```

`SELENIUM_ADDRESS` permite usar otro servidor WebDriver. El test apunta a la página AngularJS: Protractor no reconoce de forma fiable el modelo de sincronización de Angular 22 sin Zone.js.

La máquina preparada conserva un par Chromium/ChromeDriver de Debian 156 bajo `/workspace/tools/chromedriver/usr`. El controlador se inicia con `/workspace/tools/chromedriver/usr/bin/chromedriver --port=9515`; el binario del navegador es `/workspace/tools/chromedriver/usr/lib/chromium/chromium`. Los paquetes se descargaron usando índices firmados y se extrajeron sin sustituir el Chromium del sistema. Estos binarios son herramientas de esta máquina y no forman parte del repositorio.

AngularJS y Protractor están fuera de soporte; se incluyen por petición expresa como material histórico ejecutable. Las dependencias antiguas no se presentan como una base recomendada para una aplicación de producción. Karma ejecuta Jasmine sobre AngularJS; esta suite no pretende probar los componentes de Angular 22.

## Referencias antiguas sin una biblioteca equivalente instalable

Ivy ya viene integrado en Angular 22. Angular Universal fue reemplazado por `@angular/ssr`: instalar el paquete Universal antiguo dentro del framework 22 no representa una configuración compatible. SSR está implementado con @angular/ssr 22 en fundamentos y Material, con hidratación y pruebas del HTML recibido. Para depuración se usan DevTools actuales en lugar de depender de Augury.
