import { chromium } from 'playwright-core';
import assert from 'node:assert/strict';
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const base = process.env.BASE_URL || 'http://127.0.0.1:4200';
let count = 0;
async function check(name, fn) {
  await fn();
  count++;
  console.log('PASS ' + name);
}
try {
  await page.goto(base);
  await check('binding, pipe y evento', async () => {
    await page.getByLabel('Tu nombre').fill('Ana Sol');
    await page.getByRole('button', { name: 'Saludar', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'Saludos, Ana Sol' }).waitFor();
    assert.match(await page.locator('main').innerText(), /Iniciales: AS/);
  });
  await check('interpolación segura frente a HTML introducido', async () => {
    await page.getByLabel('Tu nombre').fill('<img src=x onerror="window.injected=true">');
    await page.getByRole('button', { name: 'Saludar', exact: true }).click();
    await page.waitForFunction(() =>
      document.querySelector('[role="status"]')?.textContent?.includes('<img'),
    );
    assert.equal(await page.locator('main img').count(), 0);
    assert.equal(await page.evaluate(() => window.injected), undefined);
  });
  await check('control de flujo', async () => {
    await page.getByRole('button', { name: 'Ocultar lista' }).click();
    await page.waitForFunction(() => document.querySelectorAll('main li').length === 0);
    await page.getByRole('button', { name: 'Mostrar lista' }).click();
    await page.waitForFunction(() => document.querySelectorAll('main li').length === 4);
  });
  await page.getByRole('link', { name: 'Formularios', exact: true }).click();
  await check('formulario template-driven', async () => {
    assert.equal(await page.getByRole('button', { name: 'Enviar nombre' }).isDisabled(), true);
    await page.getByLabel('Nombre', { exact: true }).fill('Ana');
    await page.getByRole('button', { name: 'Enviar nombre' }).click();
    await page.getByText('Nombre recibido: Ana', { exact: true }).waitFor();
  });
  await check('formulario reactivo y errores', async () => {
    await page.getByLabel('Correo', { exact: true }).fill('invalido');
    await page.getByLabel('Correo', { exact: true }).blur();
    await page.getByRole('alert').waitFor();
    assert.equal(await page.getByRole('button', { name: 'Enviar correo' }).isDisabled(), true);
    await page.getByLabel('Correo', { exact: true }).fill('ana@example.com');
    await page.getByRole('button', { name: 'Enviar correo' }).click();
    await page.getByText('Correo validado: ana@example.com', { exact: true }).waitFor();
  });
  await page.getByRole('link', { name: 'Datos y HTTP' }).click();
  await check('HTTP y recuperación tras error', async () => {
    await page.getByText('Servicios e inyección', { exact: true }).waitFor();
    await page.getByRole('button', { name: 'Probar error HTTP' }).click();
    await page.getByRole('status').filter({ hasText: 'No fue posible' }).waitFor();
    await page.getByRole('button', { name: 'Cargar datos' }).click();
    await page.getByText('Servicios e inyección', { exact: true }).waitFor();
    assert.equal(await page.getByRole('status').innerText(), '');
  });
  await check('registro, login, persistencia y logout reales', async () => {
    await page.getByRole('link', { name: 'Ruta con guard' }).click();
    await page.waitForURL('**/acceso');
    const username = 'browser_' + Date.now();
    await page.getByLabel('Usuario', { exact: true }).fill(username);
    await page.getByLabel('Contraseña', { exact: true }).fill('Browser-password-123');
    await page.getByRole('button', { name: 'Registrar cuenta' }).click();
    await page.getByRole('status').filter({ hasText: 'Cuenta registrada' }).waitFor();
    await page.getByRole('button', { name: 'Iniciar sesión', exact: true }).click();
    await page.waitForURL('**/privado');
    await page.getByText('Datos privados de ' + username, { exact: true }).waitFor();
    await page.reload();
    await page.getByText('Datos privados de ' + username, { exact: true }).waitFor();
    await page.getByRole('button', { name: 'Cerrar sesión' }).click();
    await page.waitForURL('**/acceso');
    await page.getByRole('link', { name: 'Ruta con guard' }).click();
    await page.waitForURL('**/acceso');
  });
  await check('componentes Material e hidratación', async () => {
    await page.getByRole('link', { name: 'Material', exact: true }).click();
    await page.getByRole('heading', { name: 'Angular Material y SSR' }).waitFor();
    assert(await page.getByRole('button', { name: 'Completar práctica' }).isDisabled());
    await page.getByRole('switch', { name: 'Activar práctica' }).click();
    await page.getByRole('button', { name: 'Completar práctica' }).click();
    await page.getByText('Prácticas completadas: 1', { exact: true }).waitFor();
  });
  await check('hooks y remontaje', async () => {
    await page.getByRole('link', { name: 'Ciclo de vida' }).click();
    await page.getByText(/1 cambios de entrada/).waitFor();
    await page.getByRole('button', { name: 'Cambiar entrada' }).click();
    await page.getByText(/2 cambios de entrada/).waitFor();
    await page.getByRole('button', { name: 'Desmontar hijo' }).click();
    await page.waitForFunction(() => document.querySelectorAll('app-lifecycle').length === 0);
    await page.getByRole('button', { name: 'Montar hijo', exact: true }).click();
    await page.getByText(/1 cambios de entrada · 0 segundos/).waitFor();
  });
  await check('NgModule y directivas clásicas', async () => {
    await page.getByRole('link', { name: 'Angular clásico' }).click();
    await page.getByRole('heading', { name: 'Angular con NgModule' }).waitFor();
    await page.getByLabel('Filtro').fill('NgModule');
    await page.waitForFunction(() => document.querySelectorAll('main li').length === 1);
    await page.getByRole('button', { name: 'Alternar lista clásica' }).click();
    await page.waitForFunction(() => document.querySelectorAll('main li').length === 0);
  });
  await check('AngularJS independiente', async () => {
    await page.getByRole('link', { name: 'Abrir ejemplo independiente de AngularJS 1.8' }).click();
    await page.getByLabel('Nombre', { exact: true }).fill('AngularJS');
    await page.waitForFunction(
      () => document.querySelector('#greeting')?.textContent === 'Hola, AngularJS',
    );
    assert.equal(await page.locator('li').count(), 3);
  });
  await check('sin errores de ejecución', async () => assert.deepEqual(errors, []));
  console.log(`${count} comprobaciones completadas.`);
} finally {
  await browser.close();
}
