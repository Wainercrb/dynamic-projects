# Angular: 50 preguntas aplicadas

[Índice completo](INDEX.md) · [Resultados y límites](docs/VALIDACION.md)

Laboratorio con Angular **22.2.4**, CLI/build **22.2.5**, TypeScript 6 y Node **24.19.0**. Incluye Material, SSR e hidratación, backend con registro/login/logout, seguridad, ejemplos históricos y pruebas.

## Desarrollo

```sh
npm ci
npm start
```

`npm start` inicia frontend (puerto 4200) y API (3001). El frontend envía `/api` al backend mediante `proxy.conf.json`. Los procesos se cierran juntos. `prestart` prepara la página AngularJS independiente.

En **Ruta con guard**, registra un usuario de 3–40 caracteres (`a-z`, `A-Z`, dígitos, `_` o `-`) y una contraseña de 12–128 caracteres. Después inicia sesión. No hay credenciales predeterminadas. La contraseña se hashea con scrypt y salt; una cookie HttpOnly identifica una sesión del servidor. Las cuentas y sesiones se pierden al reiniciar: este es un laboratorio de una sola instancia, no un servicio desplegado para usuarios reales.

## Build y SSR

```sh
npm run build
npm run start:ssr
```

El servidor compilado usa el puerto 4000. `/fundamentos` y `/material` entregan HTML renderizado e hidratan en el navegador. El resto usa renderizado cliente, incluidas las pantallas privadas; la API siempre verifica la sesión. `@angular/ssr` implementa la funcionalidad antes conocida como Angular Universal.

## Calidad y formato

```sh
npm run format
npm run format:check
npm run typecheck
npm run test:unit
npm run test:api
npm run test:angularjs
# Con npm start activo:
npm run test:smoke
# Con npm run start:ssr activo:
npm run test:ssr
BASE_URL=http://127.0.0.1:4000 npm run test:smoke
npm run test:performance
```

Las pruebas de navegador necesitan Chromium en `/usr/bin/chromium` o `CHROMIUM_PATH`. Protractor y sus requisitos están en [ejemplos históricos](docs/historicos/README.md). Las mediciones de rendimiento se guardan en `docs/performance.json`.

## Configuración del backend

No se requieren secretos para el laboratorio local: la clave de sesión se genera al iniciar. En `NODE_ENV=production`, `SESSION_SECRET` debe proporcionarse por el entorno con al menos 32 caracteres y las cookies son Secure. `APP_ORIGIN` permite fijar el origen exacto autorizado; por defecto se compara con el origen de la petición. Un despliegue real necesita HTTPS, almacenes persistentes de usuarios y sesiones, límites distribuidos y configuración explícita del proxy de confianza. No se incluyen secretos en archivos ni se publica este laboratorio como servicio de producción.
