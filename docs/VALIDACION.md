# Validación y alcance

Entorno: Node 24.19.0, npm 11.9.0, Angular 22.2.4, CLI/build 22.2.5 y TypeScript 6.0.3. Chromium del sistema para Playwright/Karma; Chromium y ChromeDriver 156 compatibles para Protractor.

## Comprobaciones reproducibles

```sh
npm ci
npm run format:check
npm run typecheck
npm run build
npm run test:unit
npm run test:api
npm run test:angularjs
npm run start:ssr
# En otra terminal:
npm run test:ssr
BASE_URL=http://127.0.0.1:4000 npm run test:smoke
npm run test:performance
```

- Compilación: AOT, plantillas estrictas, browser/server bundles y presupuesto inicial de 600 kB como máximo.
- Unidad: 1 test del pipe, con nombres compuestos, espacios, Unicode y vacío.
- API: 10 escenarios de integración más el test contenedor (11 resultados del runner). Incluyen autorización, CSRF, origen, cookies, contraseña incorrecta, duplicados, fijación de sesión, aislamiento, logout y rate limit.
- Navegador: 12 comprobaciones de binding, XSS como texto, control de flujo, ambos formularios, HTTP/error/reintento, registro/login/recarga/logout, Material, hooks, NgModule, AngularJS y ausencia de excepciones de página.
- SSR: 2 solicitudes verifican contenido HTML y marcadores de hidratación sin ejecutar JavaScript, más una petición API anónima que debe devolver 401.
- Históricos: 2 tests Jasmine/Karma sobre AngularJS y 1 prueba Protractor de binding/selectores. Para Protractor iniciar ChromeDriver y seleccionar el binario compatible; [instrucciones](historicos/README.md).
- Rendimiento: cinco contextos nuevos de Chromium, navegación SSR e interacción tras hidratación y comprobación de carga lazy. Se valida presupuesto de bytes, no un umbral de latencia dependiente de hardware.

## Comparar optimización

```sh
npx ng build --configuration development --output-path /tmp/angular-unoptimized
BASELINE_DIR=/tmp/angular-unoptimized/browser npm run test:performance
```

El JSON de [la medición](performance.json) incluye tamaño inicial, gzip, total JS del build de producción y desarrollo, mediana de TTFB/DOMContentLoaded y datos de las cinco ejecuciones. Compara el código generado, no demuestra que los tiempos sean mejores que otra aplicación ni mide carga concurrente. El gzip es una estimación por archivo; el servidor local no configura compresión HTTP.

## Límites

Todo el flujo funciona como laboratorio local de una instancia. Usuarios y sesiones son efímeros; un reinicio exige registrar de nuevo. No se ha desplegado un servicio para producción ni realizado una auditoría de seguridad completa. SSR se activa para fundamentos y Material; las rutas privadas y el resto usan renderizado cliente por decisión explícita. Angular Universal se representa con @angular/ssr compatible con Angular 22. Los ejemplos de AngularJS y Protractor están fuera de soporte, separados para estudio.

El error HTTP 404 de la prueba es deliberado. El hook destruye su intervalo y el navegador comprueba desmontaje y reinicialización; no se ha medido memoria. Las pruebas no constituyen cobertura exhaustiva de toda combinación de estados.
