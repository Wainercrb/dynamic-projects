# Fundamentos

Análisis del PDF Safari.pdf. Las preguntas se resumen en español y se contrastan con la implementación Angular 22.

## 1. Qué es Angular

**Estado: Conceptual.** Framework de aplicaciones basado en componentes y TypeScript; este proyecto es una SPA.

## 2. Características principales

**Estado: Aplicada.** Binding, DI, rutas, formularios y plantillas se muestran en las páginas.

## 3. AngularJS frente a Angular

**Estado: Aplicada (histórica).** AngularJS 1.8 se ejecuta en una página independiente; consultar docs/legacy/README.md.

## 4. TypeScript

**Estado: Aplicada.** Tipos de Topic, formularios tipados y compilación estricta.

## 5. Data binding

**Estado: Aplicada.** Nombre y saludo en fundamentos/page.ts.

## 6. Interpolación

**Estado: Aplicada.** El saludo usa {{name}}; Angular escapa texto.

## 7. Property binding

**Estado: Aplicada.** El botón usa [disabled].

## 8. Binding unidireccional y bidireccional

**Estado: Aplicada.** [disabled], eventos (click) y [(ngModel)].

## 9. Angular CLI

**Estado: Aplicada.** npm start ejecuta ng serve; npm run build ejecuta ng build. Para generar: npx ng generate component nombre.

## 10. Componentes

**Estado: Aplicada.** Cada carpeta de funcionalidad contiene un componente standalone.

## 11. Crear componentes

**Estado: Aplicada.** Los componentes se escribieron explícitamente; también se pueden generar con npx ng generate component nombre.

## 14. Directivas

**Estado: Aplicada.** shared/highlight.ts define una directiva de atributo.

## 15. Estructurales frente a atributos

**Estado: Adaptada.** @if y @for son control de flujo integrado moderno, no directivas. Highlight modifica un atributo visual; *ngIf/*ngFor se ejecutan en /clasico como enfoque anterior.

## 22. Pipes

**Estado: Aplicada.** UpperCasePipe e Initials transforman nombre e iniciales.

## 50. Ventajas

**Estado: Conceptual.** Tipado, herramientas y componentes; su coste de complejidad debe evaluarse por proyecto.
