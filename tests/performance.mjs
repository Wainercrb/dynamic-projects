import { chromium } from 'playwright-core';
import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import assert from 'node:assert/strict';
const base = process.env.SSR_URL || 'http://127.0.0.1:4000';
const folder = 'dist/ejemplos/browser';
const html = await readFile(folder + '/index.csr.html', 'utf8').catch(() =>
  readFile(folder + '/index.html', 'utf8'),
);
const initial = [...html.matchAll(/(?:src|href)="([^"/]+\.(?:js|css))"/g)].map((m) => m[1]);
let initialBytes = 0,
  initialGzipBytes = 0;
for (const name of new Set(initial)) {
  const data = await readFile(folder + '/' + name);
  initialBytes += data.length;
  initialGzipBytes += gzipSync(data).length;
}
assert(initialBytes > 0);
assert(initialBytes < 600_000, 'Presupuesto inicial de 600 kB');
const productionJs = (
  await Promise.all(
    (await readdir(folder)).filter((n) => n.endsWith('.js')).map((n) => stat(folder + '/' + n)),
  )
).reduce((sum, s) => sum + s.size, 0);
const baseline = process.env.BASELINE_DIR;
let baselineJs = null;
if (baseline) {
  const files = (await readdir(baseline)).filter((n) => n.endsWith('.js'));
  baselineJs = (await Promise.all(files.map((n) => stat(baseline + '/' + n)))).reduce(
    (sum, s) => sum + s.size,
    0,
  );
  assert(
    productionJs < baselineJs,
    'Producción debe reducir JavaScript frente al build sin optimizar',
  );
}
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox'],
});
const runs = [];
try {
  for (let i = 0; i < 5; i++) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(base + '/fundamentos');
    await page.getByRole('button', { name: 'Saludar', exact: true }).waitFor();
    const before = await page.evaluate(() =>
      performance
        .getEntriesByType('resource')
        .filter((r) => r.name.endsWith('.js'))
        .map((r) => r.name),
    );
    await page.getByLabel('Tu nombre').fill('Rendimiento');
    await page.getByRole('button', { name: 'Saludar', exact: true }).click();
    await page.getByText('Saludos, Rendimiento', { exact: true }).waitFor();
    const nav = await page.evaluate(() => {
      const n = performance.getEntriesByType('navigation')[0];
      return {
        ttfbMs: n.responseStart - n.requestStart,
        domContentLoadedMs: n.domContentLoadedEventEnd - n.startTime,
      };
    });
    await page.getByRole('link', { name: 'Material', exact: true }).click();
    await page.getByRole('heading', { name: 'Angular Material y SSR' }).waitFor();
    const after = await page.evaluate(() =>
      performance
        .getEntriesByType('resource')
        .filter((r) => r.name.endsWith('.js'))
        .map((r) => r.name),
    );
    assert(
      after.some((url) => !before.includes(url)),
      'La navegación debe cargar un chunk diferido',
    );
    runs.push({ ...nav, lazyRequests: after.filter((url) => !before.includes(url)).length });
    await context.close();
  }
} finally {
  await browser.close();
}
const median = (key) => [...runs].map((r) => r[key]).sort((a, b) => a - b)[2];
const report = {
  description:
    'Medición local: SSR de fundamentos, hidratación y navegación lazy a Material; cinco contextos nuevos de Chromium. Los tiempos no son una garantía de producción.',
  node: process.version,
  initialBytes,
  initialGzipBytes,
  productionJs,
  baselineJs,
  reductionPercent: baselineJs ? Math.round((1 - productionJs / baselineJs) * 100) : null,
  medianTtfbMs: median('ttfbMs'),
  medianDomContentLoadedMs: median('domContentLoadedMs'),
  runs,
};
await writeFile('docs/performance.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
