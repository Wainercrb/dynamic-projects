# Autenticación y seguridad aplicadas (30, 31, 49)

`server/api.ts` ofrece registro, login, comprobación de sesión, datos privados y logout. La autorización se comprueba en cada GET `/api/private`; modificar el guard o el cliente no concede acceso. El guard consulta `/api/session` y redirige al formulario si no hay sesión.

- Contraseñas: scrypt, salt aleatorio por usuario, comparación de hashes en tiempo constante. No se guardan contraseñas en texto plano ni se devuelven hashes.
- Sesiones: cookie HttpOnly, SameSite Strict y expiración de 30 minutos; identificador regenerado al iniciar sesión y destruido al cerrar. La sesión permanece al recargar, pero no al reiniciar el backend.
- CSRF: token aleatorio asociado a la sesión, cookie `XSRF-TOKEN` y cabecera `X-XSRF-TOKEN` enviada por Angular; comprobación de origen exacto en operaciones mutantes. La cookie CSRF es legible por JavaScript por diseño; la cookie de sesión no.
- Validación del servidor: nombre de usuario limitado, longitud de contraseña y cuerpo JSON de 8 kB como máximo. Rechazo de duplicados y credenciales incorrectas.
- Intentos: rate limit en registro y login; respuestas privadas con `Cache-Control: no-store` y cabeceras de Helmet. El token CSRF se rota al iniciar sesión.
- XSS: interpolación escapada por Angular, sin `bypassSecurityTrustHtml` ni tokens en localStorage. La prueba de navegador introduce un `<img onerror>` como texto y verifica que no se crea una imagen ni se ejecuta código.

Las pruebas de `tests/api.spec.ts` verifican acceso anónimo, atributos de cookie, CSRF/origen, validación, registro duplicado, credenciales incorrectas, rotación de sesión, aislamiento entre clientes, invalidación tras logout y bloqueo de intentos. Las pruebas de navegador verifican el flujo completo real y la persistencia al recargar.

## Límites concretos

Usuarios y sesiones se almacenan en memoria, con una clave efímera para desarrollo. No hay recuperación de contraseña, MFA ni proveedor OAuth. En producción se exige `SESSION_SECRET` y cookie Secure; todavía se necesitan TLS, base de datos, almacén de sesiones, política de recuperación y límites distribuidos. No se impone CSP sobre todas las páginas: AngularJS histórico tiene requisitos distintos. No se afirma una auditoría de seguridad completa. El contenido histórico fuera de soporte se conserva para aprendizaje.
