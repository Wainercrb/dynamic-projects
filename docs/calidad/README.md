# Calidad

Análisis del PDF Safari.pdf. Las preguntas se resumen en español y se contrastan con la implementación Angular 22.

## 29. Angular Material

**Estado: Aplicada.** `src/app/material/page.ts` integra tarjeta, botón, switch y tema de Angular Material 22; el navegador prueba su interacción.

## 32. Detección de cambios

**Estado: Aplicada.** OnPush y signals actualizan la vista. Angular 22 funciona sin Zone.js por defecto.

## 33. AOT

**Estado: Aplicada.** ng build compila plantillas anticipadamente y valida tipos.

## 34. SSR

**Estado: Aplicada.** `src/main.server.ts` configura SSR para fundamentos y Material con @angular/ssr; `server.ts` sirve el HTML y la API. `tests/ssr.mjs` comprueba texto y marcadores de hidratación sin ejecutar JavaScript.

## 36. Tipos de pruebas

**Estado: Aplicada.** Prueba unitaria de pipe, integración de API con sesiones reales, pruebas E2E con Chromium, Jasmine/Karma, Protractor, comprobación SSR sin JavaScript y medición de rendimiento; detalles en [validación](../VALIDACION.md).

## 37. Jasmine

**Estado: Aplicada.** Dos pruebas Jasmine ejecutadas con Karma sobre el controlador y el binding de AngularJS.

## 38. Karma

**Estado: Aplicada (histórica).** karma.conf.cjs ejecuta Chromium headless para el ejemplo AngularJS.

## 39. Protractor

**Estado: Aplicada como ejemplo histórico.** Configuración y prueba en legacy/protractor. Consultar docs/legacy/README.md para los requisitos y el resultado real.

## 40. Angular Universal

**Estado: Aplicada con API actual.** La funcionalidad de Angular Universal se implementa mediante @angular/ssr 22. El paquete histórico fue reemplazado y no se mezcla con Angular 22.

## 45. Ivy

**Estado: Automática.** Motor de compilación y renderizado integrado; no requiere activación manual.

## 46. Depuración

**Estado: Aplicada.** ng serve genera entorno de desarrollo y sourcemaps; usar DevTools y Angular DevTools.

## 48. Rendimiento

**Estado: Aplicada.** Lazy loading, OnPush, track por identidad y presupuesto de tamaño de build. `tests/performance.mjs` compara JS optimizado contra desarrollo, mide cinco cargas SSR y comprueba chunks diferidos. Resultados actuales en [performance.json](../performance.json); los tiempos son de esta máquina.

## 49. Seguridad

**Estado: Aplicada en el laboratorio.** Autorización del servidor, contraseñas hasheadas, sesión HttpOnly, CSRF/origen, validaciones, límite de intentos e interpolación escapada. Ver [medidas y límites](../seguridad/README.md).
