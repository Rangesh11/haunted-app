'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { printReceipt } = require('../src/index');

test('prints a receipt with a total', () => {
  const out = printReceipt([{ sku: ' a1', label: ' Candle ', cents: 450 }, [{ sku: 'b2', label: 'Mug', cents: 50 }]]);
  assert.match(out, /TOTAL\s+5\.00/);
  assert.match(out, /A1 Candle/);
  assert.match(out, /ref 000042/);
});
