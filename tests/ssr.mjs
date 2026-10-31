import assert from 'node:assert/strict';
const base = process.env.SSR_URL || 'http://127.0.0.1:4000';
for (const [path, text] of [
  ['/fundamentos', 'Fundamentos y binding'],
  ['/material', 'Angular Material y SSR'],
]) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert(html.includes(text), `El HTML sin ejecutar JS debe contener ${text}`);
  assert(html.includes('ngh='), 'Se esperan marcadores de hidratación');
  console.log(`PASS SSR real ${path}`);
}
const denied = await fetch(base + '/api/private');
assert.equal(denied.status, 401);
console.log('PASS API del servidor SSR protege datos');
