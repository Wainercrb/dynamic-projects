# Datos

Análisis del PDF Safari.pdf. Las preguntas se resumen en español y se contrastan con la implementación Angular 22.

## 25. HttpClient

**Estado: Aplicada.** GET /topics.json mediante servicio inyectado; no depende de una API externa.

## 26. Observables

**Estado: Aplicada.** BehaviorSubject, switchMap, AsyncPipe y catchError. AsyncPipe libera la suscripción al destruirse.

## 35. Errores

**Estado: Aplicada.** Un 404 deliberado muestra un mensaje y permite reintentar. catchError captura errores asíncronos; try/catch solo no los resuelve.
