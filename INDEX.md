# Índice · Angular aplicado

Análisis de las 50 preguntas de **Safari.pdf** y laboratorio ejecutable. Se usa Angular 22, componentes standalone y TypeScript estricto. El documento se trata como material de referencia; su invitación a comentar en redes no forma parte del trabajo solicitado.

## Ejecutar

Requiere Node 24 (comprobado con 24.19.0) y npm 11.

```sh
npm ci
npm start
# En otra terminal:
npm run build
```

`index.html` en esta raíz es la entrada web del proyecto. Angular debe compilarla; no se abre directamente como una página estática. El desarrollo sirve la aplicación en el puerto 4200 y la API en 3001. `npm run start:ssr` sirve el build SSR y API en 4000. `INDEX.md` es este índice de documentación.

## Carpetas

- [Fundamentos](docs/fundamentos/README.md): binding, componentes, directivas y pipes; código en `src/app/fundamentos` y `src/app/shared`.
- [Arquitectura](docs/arquitectura/README.md): servicios, rutas, guard y hooks; código en `src/app/navegacion` y `src/app/ciclo-vida`.
- [Formularios](docs/formularios/README.md): ambos enfoques y validaciones; código en `src/app/formularios`.
- [Datos](docs/datos/README.md): HTTP, RxJS y errores; código en `src/app/datos` y `public/topics.json`.
- [Calidad](docs/calidad/README.md): compilación, pruebas, rendimiento, seguridad y alternativas históricas.

## Dónde está cada enfoque

| Carpeta                                                      | Qué contiene                                               | Dónde verlo                                                                  |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [examples/angularjs](examples/angularjs/index.html)          | AngularJS **1.8**, ejecutado en un documento independiente | Desde Angular clásico, enlace «Abrir ejemplo independiente de AngularJS 1.8» |
| [src/app/angular-clasico](src/app/angular-clasico/module.ts) | Angular **22** con NgModule y directivas clásicas          | Pantalla **Angular clásico**, ruta `/clasico`                                |
| [examples/protractor](examples/protractor/binding.spec.js)   | Prueba E2E histórica de AngularJS                          | `npm run test:protractor`                                                    |
| [tests/angularjs](tests/angularjs/angularjs.spec.js)         | Pruebas Jasmine/Karma de AngularJS                         | `npm run test:angularjs`                                                     |
| [docs/historicos](docs/historicos/README.md)                 | Explicación de los enfoques históricos                     | Documentación; no es otra aplicación                                         |

## Preguntas en el orden del PDF

La columna **Código principal** abre el archivo concreto. **Pantalla o comprobación** indica cómo encontrar el ejemplo o ejecutar su verificación. Las definiciones conservan su carácter conceptual.

## Criterio

Aplicada significa que existe una demostración o configuración concreta. Las definiciones conceptuales se explican y se relacionan con código concreto; los temas históricos tienen ejemplos separados o su API actual compatible. La autenticación usa un backend real de laboratorio con cuentas y sesiones efímeras. Se conservan los números originales para facilitar la comparación.

| Nº  | Pregunta / tema                        | Estado                    | Explicación                        | Código principal                                                               | Pantalla o comprobación                                           |
| --- | -------------------------------------- | ------------------------- | ---------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 1   | Qué es Angular                         | Conceptual y demostrada   | [Ver](docs/fundamentos/README.md)  | [src/main.ts](src/main.ts)                                                     | Aplicación completa; `npm run build`                              |
| 2   | Características principales            | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/app.ts](src/app/app.ts)                                               | Navegación principal de la aplicación                             |
| 3   | AngularJS frente a Angular             | Aplicada (histórica)      | [Ver](docs/historicos/README.md)   | [examples/angularjs/app.js](examples/angularjs/app.js)                         | Documento `/examples/angularjs/index.html`                        |
| 4   | TypeScript                             | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [tsconfig.json](tsconfig.json)                                                 | `npm run typecheck`                                               |
| 5   | Data binding                           | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/fundamentos/page.ts](src/app/fundamentos/page.ts)                     | **Fundamentos**, `/fundamentos`                                   |
| 6   | Interpolación                          | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/fundamentos/page.ts](src/app/fundamentos/page.ts)                     | **Fundamentos**, `/fundamentos`                                   |
| 7   | Property binding                       | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/fundamentos/page.ts](src/app/fundamentos/page.ts)                     | **Fundamentos**, `/fundamentos`                                   |
| 8   | Binding unidireccional y bidireccional | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/fundamentos/page.ts](src/app/fundamentos/page.ts)                     | **Fundamentos**, `/fundamentos`                                   |
| 9   | Angular CLI                            | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [package.json](package.json)                                                   | `npm start` y `npm run build`                                     |
| 10  | Componentes                            | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/fundamentos/page.ts](src/app/fundamentos/page.ts)                     | **Fundamentos**, `/fundamentos`                                   |
| 11  | Crear componentes                      | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/fundamentos/page.ts](src/app/fundamentos/page.ts)                     | **Fundamentos**, `/fundamentos`                                   |
| 12  | NgModule                               | Aplicada (histórica)      | [Ver](docs/historicos/README.md)   | [src/app/angular-clasico/module.ts](src/app/angular-clasico/module.ts)         | **Angular clásico**, `/clasico`                                   |
| 13  | Routing                                | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/navegacion/routes.ts](src/app/navegacion/routes.ts)                   | Navegación y redirecciones                                        |
| 14  | Directivas                             | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/shared/highlight.ts](src/app/shared/highlight.ts)                     | Saludo resaltado en **Fundamentos**                               |
| 15  | Estructurales frente a atributos       | Adaptada                  | [Ver](docs/fundamentos/README.md)  | [src/app/angular-clasico/module.ts](src/app/angular-clasico/module.ts)         | **Angular clásico**, `/clasico`                                   |
| 16  | Inyección de dependencias              | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/datos/topics.service.ts](src/app/datos/topics.service.ts)             | **Datos y HTTP**, `/datos`                                        |
| 17  | Manejo de formularios                  | Aplicada                  | [Ver](docs/formularios/README.md)  | [src/app/formularios/page.ts](src/app/formularios/page.ts)                     | **Formularios**, `/formularios`                                   |
| 18  | Template-driven                        | Aplicada                  | [Ver](docs/formularios/README.md)  | [src/app/formularios/page.ts](src/app/formularios/page.ts)                     | **Formularios**, `/formularios`                                   |
| 19  | Formularios reactivos                  | Aplicada                  | [Ver](docs/formularios/README.md)  | [src/app/formularios/page.ts](src/app/formularios/page.ts)                     | **Formularios**, `/formularios`                                   |
| 20  | Diferencias entre enfoques             | Aplicada                  | [Ver](docs/formularios/README.md)  | [src/app/formularios/page.ts](src/app/formularios/page.ts)                     | **Formularios**, `/formularios`                                   |
| 21  | Validación                             | Aplicada                  | [Ver](docs/formularios/README.md)  | [src/app/formularios/page.ts](src/app/formularios/page.ts)                     | **Formularios**, `/formularios`                                   |
| 22  | Pipes                                  | Aplicada                  | [Ver](docs/fundamentos/README.md)  | [src/app/shared/initials.ts](src/app/shared/initials.ts)                       | Iniciales en **Fundamentos**; `npm run test:unit`                 |
| 23  | Servicios                              | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/navegacion/session.service.ts](src/app/navegacion/session.service.ts) | **Ruta con guard**, `/privado`; registro en `/acceso`             |
| 24  | Crear servicios                        | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/datos/topics.service.ts](src/app/datos/topics.service.ts)             | **Datos y HTTP**, `/datos`                                        |
| 25  | HttpClient                             | Aplicada                  | [Ver](docs/datos/README.md)        | [src/app/datos/topics.service.ts](src/app/datos/topics.service.ts)             | **Datos y HTTP**, `/datos`                                        |
| 26  | Observables                            | Aplicada                  | [Ver](docs/datos/README.md)        | [src/app/datos/page.ts](src/app/datos/page.ts)                                 | **Datos y HTTP**, `/datos`                                        |
| 27  | Módulos                                | Aplicada (histórica)      | [Ver](docs/historicos/README.md)   | [src/app/angular-clasico/module.ts](src/app/angular-clasico/module.ts)         | **Angular clásico**, `/clasico`                                   |
| 28  | Lazy loading                           | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/navegacion/routes.ts](src/app/navegacion/routes.ts)                   | Navegar a otra pantalla; chunks lazy en la prueba de rendimiento  |
| 29  | Angular Material                       | Aplicada                  | [Ver](docs/calidad/README.md)      | [src/app/material/page.ts](src/app/material/page.ts)                           | **Material**, `/material`                                         |
| 30  | Autenticación                          | Aplicada                  | [Ver](docs/arquitectura/README.md) | [server/api.ts](server/api.ts)                                                 | **Ruta con guard**, `/privado`; registro en `/acceso`             |
| 31  | Guards                                 | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/navegacion/routes.ts](src/app/navegacion/routes.ts)                   | **Ruta con guard**, `/privado`; registro en `/acceso`             |
| 32  | Detección de cambios                   | Aplicada                  | [Ver](docs/calidad/README.md)      | [src/app/material/page.ts](src/app/material/page.ts)                           | **Material**, `/material`                                         |
| 33  | AOT                                    | Aplicada                  | [Ver](docs/calidad/README.md)      | [angular.json](angular.json)                                                   | `npm run build` (AOT y plantillas estrictas)                      |
| 34  | SSR                                    | Aplicada                  | [Ver](docs/calidad/README.md)      | [src/main.server.ts](src/main.server.ts)                                       | `npm run start:ssr` y `npm run test:ssr`                          |
| 35  | Errores                                | Aplicada                  | [Ver](docs/datos/README.md)        | [src/app/datos/page.ts](src/app/datos/page.ts)                                 | **Datos y HTTP**, `/datos`                                        |
| 36  | Tipos de pruebas                       | Aplicada                  | [Ver](docs/calidad/README.md)      | [docs/VALIDACION.md](docs/VALIDACION.md)                                       | Comandos unitarios, API, E2E y rendimiento en la validación       |
| 37  | Jasmine                                | Aplicada (histórica)      | [Ver](docs/historicos/README.md)   | [tests/angularjs/angularjs.spec.js](tests/angularjs/angularjs.spec.js)         | `npm run test:angularjs`                                          |
| 38  | Karma                                  | Aplicada (histórica)      | [Ver](docs/historicos/README.md)   | [karma.conf.cjs](karma.conf.cjs)                                               | `npm run test:angularjs`                                          |
| 39  | Protractor                             | Aplicada (histórica)      | [Ver](docs/historicos/README.md)   | [examples/protractor/binding.spec.js](examples/protractor/binding.spec.js)     | ChromeDriver activo y `npm run test:protractor`                   |
| 40  | Angular Universal                      | Aplicada con @angular/ssr | [Ver](docs/calidad/README.md)      | [server.ts](server.ts)                                                         | `npm run start:ssr` y `npm run test:ssr`                          |
| 41  | Hooks                                  | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/ciclo-vida/page.ts](src/app/ciclo-vida/page.ts)                       | **Ciclo de vida**, `/ciclo-vida`                                  |
| 42  | ngOnChanges                            | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/ciclo-vida/page.ts](src/app/ciclo-vida/page.ts)                       | **Ciclo de vida**, `/ciclo-vida`                                  |
| 43  | ngOnInit                               | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/ciclo-vida/page.ts](src/app/ciclo-vida/page.ts)                       | **Ciclo de vida**, `/ciclo-vida`                                  |
| 44  | ngOnDestroy                            | Aplicada                  | [Ver](docs/arquitectura/README.md) | [src/app/ciclo-vida/page.ts](src/app/ciclo-vida/page.ts)                       | **Ciclo de vida**, `/ciclo-vida`                                  |
| 45  | Ivy                                    | Automática                | [Ver](docs/calidad/README.md)      | [angular.json](angular.json)                                                   | Ivy integrado; `npm run build`, sin activación adicional          |
| 46  | Depuración                             | Aplicada                  | [Ver](docs/calidad/README.md)      | [angular.json](angular.json)                                                   | `npm start` y DevTools: sourcemaps de desarrollo                  |
| 47  | Estructura                             | Aplicada                  | [Ver](docs/arquitectura/README.md) | [README.md](README.md)                                                         | Mapa de carpetas del README y este índice                         |
| 48  | Rendimiento                            | Aplicada                  | [Ver](docs/calidad/README.md)      | [tests/performance.mjs](tests/performance.mjs)                                 | `npm run test:performance`; resultados en `docs/performance.json` |
| 49  | Seguridad                              | Aplicada (laboratorio)    | [Ver](docs/calidad/README.md)      | [server/api.ts](server/api.ts)                                                 | `npm run test:api` y prueba XSS en `npm run test:smoke`           |
| 50  | Ventajas                               | Conceptual y demostrada   | [Ver](docs/fundamentos/README.md)  | [docs/fundamentos/README.md](docs/fundamentos/README.md)                       | Explicación conceptual y ejemplos de la aplicación                |

## Enfoques antiguos también aplicados

Consulta [los ejemplos históricos](docs/historicos/README.md): AngularJS, NgModule, directivas estructurales, Jasmine/Karma y Protractor. El framework principal es Angular 22.2.4; CLI/build 22.2.5 y TypeScript 6.0.3.

## Completar y comprobar las 50 preguntas

[Registro de aplicación de las 50 preguntas](docs/COBERTURA.md) · [Autenticación y seguridad](docs/seguridad/README.md) · [Validación](docs/VALIDACION.md) · [Mediciones](docs/performance.json).

El formato se aplica con `npm run format` y se comprueba con `npm run format:check`. SSR y Universal usan la API compatible actual. Las preguntas de definición no implican instalar una biblioteca adicional.
