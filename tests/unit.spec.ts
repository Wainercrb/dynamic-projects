import '@angular/compiler';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Initials } from '../src/app/shared/initials';
test('Initials: transforma nombres compuestos, espacios y entradas vacías', () => {
  const pipe = new Initials();
  assert.equal(pipe.transform('  Ana   Sol  '), 'AS');
  assert.equal(pipe.transform(''), '');
  assert.equal(pipe.transform('   '), '');
  assert.equal(pipe.transform('Érika Mora'), 'ÉM');
});
