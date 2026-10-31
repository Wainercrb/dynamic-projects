# Arquitectura

Análisis del PDF Safari.pdf. Las preguntas se resumen en español y se contrastan con la implementación Angular 22.

## 12. NgModule

**Estado: Aplicada.** `src/app/legacy/module.ts` declara y carga un NgModule con RouterModule.forChild. La aplicación principal usa standalone.

## 13. Routing

**Estado: Aplicada.** navegacion/routes.ts registra rutas y redirecciones.

## 16. Inyección de dependencias

**Estado: Aplicada.** inject(TopicsService), inject(HttpClient) e inject(DemoSession).

## 23. Servicios

**Estado: Aplicada.** TopicsService y DemoSession usan providedIn: root. Un servicio no es siempre singleton: depende de dónde se provea.

## 24. Crear servicios

**Estado: Aplicada.** Servicios explícitos; comando equivalente: npx ng generate service datos/topics.

## 27. Módulos

**Estado: Aplicada.** NgModule real en la ruta /clasico y carga diferida mediante loadChildren.

## 28. Lazy loading

**Estado: Aplicada.** loadComponent carga cada página bajo demanda.

## 30. Autenticación

**Estado: Pendiente de backend.** El permiso en memoria es una simulación, no login ni JWT. Una integración real necesita proveedor, servidor y política de sesión.

## 31. Guards

**Estado: Aplicada.** CanActivateFn devuelve un UrlTree cuando no hay permiso. Un guard no es una frontera de seguridad del servidor.

## 41. Hooks

**Estado: Aplicada.** ciclo-vida/page.ts incluye OnChanges, OnInit y OnDestroy.

## 42. ngOnChanges

**Estado: Aplicada.** Cuenta cambios de @Input al pulsar Cambiar entrada.

## 43. ngOnInit

**Estado: Aplicada.** Inicia un intervalo al montar el hijo.

## 44. ngOnDestroy

**Estado: Aplicada.** Limpia el intervalo al desmontar.

## 47. Estructura

**Estado: Aplicada.** Código organizado por funcionalidades y shared para utilidades compartidas.
