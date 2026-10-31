# Validación

Verificado en esta máquina con Node 24.19.0, npm 11.9.0 y Chromium del sistema:

- `npm run build`: correcto; compilación AOT y plantillas estrictas, páginas separadas en chunks de carga diferida.
- `npm run test:smoke`: 10 comprobaciones correctas: binding/pipes/eventos, control de flujo, formulario template-driven, validación reactiva, HTTP/error/reintento, guard/revocación, hooks/remontaje NgModule/directivas clásicas, AngularJS independiente y ausencia de excepciones de página.

## Repetir

```sh
npm ci
npm run build
npm start
# En otra terminal, con Chromium instalado:
npm run test:smoke
```

El test usa `/usr/bin/chromium`. Si está en otra ubicación, proporcionar `CHROMIUM_PATH`. `BASE_URL` permite cambiar el destino del test. Las pruebas esperan las actualizaciones asíncronas de Angular antes de comprobar el DOM. No se necesita descargar otro navegador con Playwright.

## Límites

Framework actualizado a Angular 22.2.4, CLI/build 22.2.5, TypeScript 6.0.3. `npm run test:legacy`: 2 pruebas Jasmine/Karma correctas. `npm run test:protractor`: 1 prueba correcta con Chromium y ChromeDriver 156.0.8078.73 compatibles. Consulta [los ejemplos históricos](legacy/README.md).

No se han implementado ni validado autenticación real, autorización del servidor, SSR, Angular Material, mediciones de rendimiento ni una suite unitaria completa. El recurso HTTP es JSON estático local. El error 404 de la prueba es deliberado. El intervalo del hijo se cancela en ngOnDestroy; la prueba observa desmontaje y reinicialización, no mide fugas de memoria. No se ha publicado ni subido el proyecto a GitHub.
