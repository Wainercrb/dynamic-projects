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

## Criterio

Aplicada significa que existe una demostración o configuración concreta. Las definiciones conceptuales se explican y se relacionan con código concreto; los temas históricos tienen ejemplos separados o su API actual compatible. La autenticación usa un backend real de laboratorio con cuentas y sesiones efímeras. Se conservan los números originales para facilitar la comparación.

| Nº  | Pregunta / tema                        | Estado                    | Análisis                           |
| --- | -------------------------------------- | ------------------------- | ---------------------------------- |
| 1   | Qué es Angular                         | Conceptual y demostrada   | [Ver](docs/fundamentos/README.md)  |
| 2   | Características principales            | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 3   | AngularJS frente a Angular             | Aplicada (histórica)      | [Ver](docs/legacy/README.md)       |
| 4   | TypeScript                             | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 5   | Data binding                           | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 6   | Interpolación                          | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 7   | Property binding                       | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 8   | Binding unidireccional y bidireccional | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 9   | Angular CLI                            | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 10  | Componentes                            | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 11  | Crear componentes                      | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 12  | NgModule                               | Aplicada (histórica)      | [Ver](docs/legacy/README.md)       |
| 13  | Routing                                | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 14  | Directivas                             | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 15  | Estructurales frente a atributos       | Adaptada                  | [Ver](docs/fundamentos/README.md)  |
| 16  | Inyección de dependencias              | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 17  | Manejo de formularios                  | Aplicada                  | [Ver](docs/formularios/README.md)  |
| 18  | Template-driven                        | Aplicada                  | [Ver](docs/formularios/README.md)  |
| 19  | Formularios reactivos                  | Aplicada                  | [Ver](docs/formularios/README.md)  |
| 20  | Diferencias entre enfoques             | Aplicada                  | [Ver](docs/formularios/README.md)  |
| 21  | Validación                             | Aplicada                  | [Ver](docs/formularios/README.md)  |
| 22  | Pipes                                  | Aplicada                  | [Ver](docs/fundamentos/README.md)  |
| 23  | Servicios                              | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 24  | Crear servicios                        | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 25  | HttpClient                             | Aplicada                  | [Ver](docs/datos/README.md)        |
| 26  | Observables                            | Aplicada                  | [Ver](docs/datos/README.md)        |
| 27  | Módulos                                | Aplicada (histórica)      | [Ver](docs/legacy/README.md)       |
| 28  | Lazy loading                           | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 29  | Angular Material                       | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 30  | Autenticación                          | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 31  | Guards                                 | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 32  | Detección de cambios                   | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 33  | AOT                                    | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 34  | SSR                                    | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 35  | Errores                                | Aplicada                  | [Ver](docs/datos/README.md)        |
| 36  | Tipos de pruebas                       | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 37  | Jasmine                                | Aplicada (histórica)      | [Ver](docs/legacy/README.md)       |
| 38  | Karma                                  | Aplicada (histórica)      | [Ver](docs/legacy/README.md)       |
| 39  | Protractor                             | Aplicada (histórica)      | [Ver](docs/legacy/README.md)       |
| 40  | Angular Universal                      | Aplicada con @angular/ssr | [Ver](docs/calidad/README.md)      |
| 41  | Hooks                                  | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 42  | ngOnChanges                            | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 43  | ngOnInit                               | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 44  | ngOnDestroy                            | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 45  | Ivy                                    | Automática                | [Ver](docs/calidad/README.md)      |
| 46  | Depuración                             | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 47  | Estructura                             | Aplicada                  | [Ver](docs/arquitectura/README.md) |
| 48  | Rendimiento                            | Aplicada                  | [Ver](docs/calidad/README.md)      |
| 49  | Seguridad                              | Aplicada (laboratorio)    | [Ver](docs/calidad/README.md)      |
| 50  | Ventajas                               | Conceptual y demostrada   | [Ver](docs/fundamentos/README.md)  |

## Enfoques antiguos también aplicados

Consulta [los ejemplos históricos](docs/legacy/README.md): AngularJS, NgModule, directivas estructurales, Jasmine/Karma y Protractor. El framework principal es Angular 22.2.4; CLI/build 22.2.5 y TypeScript 6.0.3.

## Completar y comprobar las 50 preguntas

[Registro de aplicación de las 50 preguntas](docs/COBERTURA.md) · [Autenticación y seguridad](docs/seguridad/README.md) · [Validación](docs/VALIDACION.md) · [Mediciones](docs/performance.json).

El formato se aplica con `npm run format` y se comprueba con `npm run format:check`. SSR y Universal usan la API compatible actual. Las preguntas de definición no implican instalar una biblioteca adicional.
