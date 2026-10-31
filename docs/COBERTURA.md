# Aplicación de las 50 preguntas

Los números corresponden a Safari.pdf. Las preguntas conceptuales se explican y se demuestran con el proyecto; las herramientas históricas se ejecutan por separado y Universal se aplica mediante su sucesor compatible. Esta tabla identifica evidencia concreta, sin equiparar una definición con una característica adicional.

| Nº  | Aplicación concreta                                                      | Comprobación                                                    |
| --- | ------------------------------------------------------------------------ | --------------------------------------------------------------- |
| 1   | Aplicación Angular con bootstrapApplication y componentes TypeScript     | Build y navegación E2E                                          |
| 2   | Binding, DI, rutas, plantillas y formularios                             | E2E de funcionalidades                                          |
| 3   | AngularJS 1.8 en documento separado y Angular 22 en la SPA               | E2E AngularJS, Karma y Protractor                               |
| 4   | Tipado estricto de modelos, formularios y backend                        | typecheck y compilación de plantillas                           |
| 5   | Estado del componente enlazado al nombre y saludo                        | E2E binding                                                     |
| 6   | Interpolación de nombre y contador                                       | E2E y SSR                                                       |
| 7   | [disabled] en botones                                                    | E2E de formularios y Material                                   |
| 8   | Eventos, propiedad y [(ngModel)]                                         | E2E de saludo y entrada                                         |
| 9   | CLI para serve/build y comandos de generación documentados               | start y build ejecutados                                        |
| 10  | Componentes separados por funcionalidad                                  | Compilación y rutas                                             |
| 11  | Componentes con clase, plantilla e imports explícitos                    | Compilación y navegación                                        |
| 12  | NgModule con declarations e imports                                      | Ruta clásica E2E                                                |
| 13  | provideRouter y RouterModule.forChild                                    | Navegación, redirección y guard E2E                             |
| 14  | Directiva Highlight y ngClass/ngStyle                                    | Compilación y página clásica                                    |
| 15  | *ngIf/*ngFor clásicos y @if/@for actuales                                | Alternar/filtrar listas E2E                                     |
| 16  | inject de HttpClient y servicios                                         | HTTP y sesión E2E                                               |
| 17  | Formularios template-driven y reactivo                                   | Dos pruebas E2E                                                 |
| 18  | ngForm y ngModel con validadores                                         | Envío y bloqueo inválido E2E                                    |
| 19  | FormGroup y FormControl tipados                                          | Validación y envío E2E                                          |
| 20  | Ambos enfoques en la misma página                                        | Dos flujos funcionales                                          |
| 21  | required, minlength y email; validación independiente de backend         | E2E y API inválida                                              |
| 22  | UpperCasePipe y pipe Initials                                            | Unitario y E2E                                                  |
| 23  | Servicio de datos y servicio de sesión                                   | HTTP y login E2E                                                |
| 24  | Clases Injectable con providedIn root                                    | Build y uso real de DI                                          |
| 25  | HttpClient GET de datos y GET/POST de API                                | Datos, login y logout E2E                                       |
| 26  | BehaviorSubject, switchMap, catchError y AsyncPipe                       | Error HTTP y reintento                                          |
| 27  | Módulo clásico y organización por funcionalidades                        | Compilación y navegación                                        |
| 28  | loadComponent y loadChildren                                             | Navegación y carga de chunks medida                             |
| 29  | Material card, button, slide-toggle y tema                               | E2E Material e HTML SSR                                         |
| 30  | Registro, scrypt, cookie HttpOnly y sesión real de servidor              | API y E2E con recarga                                           |
| 31  | Guard consulta sesión; backend autoriza datos                            | E2E redirección y API 401                                       |
| 32  | OnPush y signals en páginas interactivas                                 | Interacciones después de hidratación                            |
| 33  | Build AOT con plantillas estrictas                                       | npm run build                                                   |
| 34  | HTML SSR de fundamentos y Material con hidratación                       | Peticiones sin JS y E2E                                         |
| 35  | Recuperación HTTP con catchError y mensajes de login                     | Error/reintento E2E y respuestas API                            |
| 36  | Unidad, integración, E2E y rendimiento                                   | Runners documentados en VALIDACION.md                           |
| 37  | Jasmine sobre el controlador y binding AngularJS                         | 2 tests Karma/Jasmine                                           |
| 38  | Karma con lanzador Chromium headless                                     | 2 tests en navegador                                            |
| 39  | Protractor con by.model y by.repeater                                    | 1 spec con driver compatible                                    |
| 40  | Función de Universal con @angular/ssr 22                                 | Mismo HTML SSR real de la pregunta 34                           |
| 41  | OnChanges, OnInit y OnDestroy                                            | E2E del componente hijo                                         |
| 42  | Cambios de @Input contados en ngOnChanges                                | Cambiar entrada E2E                                             |
| 43  | Intervalo inicializado al montar                                         | Montaje/remontaje E2E                                           |
| 44  | clearInterval al destruir                                                | Desmontaje/remontaje E2E; sin prueba de fugas                   |
| 45  | Motor Ivy integrado en el compilador Angular                             | Build AOT; no requiere instalar otro motor                      |
| 46  | Build de desarrollo con sourcemaps y scripts de pruebas                  | Build development ejecutado; DevTools disponibles en navegador  |
| 47  | Carpetas por funcionalidades, shared, server, legacy y tests             | Índice y rutas verificadas                                      |
| 48  | Lazy loading, OnPush, track, minificación y presupuesto                  | Comparación de bytes y cinco mediciones locales                 |
| 49  | Autorización, hash, CSRF/origen, cookie, validación, rate limit y escape | Tests API y XSS como texto en navegador                         |
| 50  | Tipado, componentes reutilizables y herramientas trabajando juntos       | Proyecto integrado; ventajas y costes explicados en fundamentos |

Resultados, comandos y límites de lo probado: [VALIDACION.md](VALIDACION.md). El formato de todo el código propio se controla con Prettier; dependencias, bundles y lockfile generado se excluyen del formateo.
