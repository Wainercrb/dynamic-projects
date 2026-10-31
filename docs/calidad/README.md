# Calidad

Análisis del PDF Safari.pdf. Las preguntas se resumen en español y se contrastan con la implementación Angular 22.

## 29. Angular Material

**Estado: Opcional.** No se instala: los controles HTML nativos cubren este laboratorio sin otra biblioteca.

## 32. Detección de cambios

**Estado: Aplicada.** OnPush y signals actualizan la vista. Angular 22 funciona sin Zone.js por defecto.

## 33. AOT

**Estado: Aplicada.** ng build compila plantillas anticipadamente y valida tipos.

## 34. SSR

**Estado: Opcional.** SPA local sin objetivo SEO ni servidor de renderizado. Para un proyecto que lo necesite, evaluar @angular/ssr.

## 36. Tipos de pruebas

**Estado: Aplicada.** Build estricto y smoke de navegador con interacciones. No equivalen a una suite completa de pruebas unitarias, integración y rendimiento.

## 37. Jasmine

**Estado: Aplicada.** Dos pruebas Jasmine ejecutadas con Karma sobre el controlador y el binding de AngularJS.

## 38. Karma

**Estado: Aplicada (histórica).** karma.conf.cjs ejecuta Chromium headless para el ejemplo AngularJS.

## 39. Protractor

**Estado: Aplicada como ejemplo histórico.** Configuración y prueba en legacy/protractor. Consultar docs/legacy/README.md para los requisitos y el resultado real.

## 40. Angular Universal

**Estado: Histórica / opcional.** Para SSR moderno se usa @angular/ssr. No se instala Universal por seguir una referencia antigua.

## 45. Ivy

**Estado: Automática.** Motor de compilación y renderizado integrado; no requiere activación manual.

## 46. Depuración

**Estado: Aplicada.** ng serve genera entorno de desarrollo y sourcemaps; usar DevTools y Angular DevTools.

## 48. Rendimiento

**Estado: Aplicada.** Lazy loading, OnPush y track por identidad. No se afirma una mejora medida sin un benchmark.

## 49. Seguridad

**Estado: Parcial.** Interpolación escapada y sin bypassSecurityTrustHtml ni almacenamiento de tokens. Autorización, validación de servidor y protección CSRF deben implementarse en un backend real.
