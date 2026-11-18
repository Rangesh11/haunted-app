'use strict';
const { money, rule, cleanLabel, code } = require('./format');
const { loadConfig } = require('./config');
const { lineItems, total, normaliseSku } = require('./cart');

function printReceipt(bundles, options) {
  const config = loadConfig(options);
  const lines = [rule(config.width)];
  for (const item of lineItems(bundles)) {
    lines.push(`${normaliseSku(item.sku)} ${cleanLabel(item.label)} ${money(item.cents)}`);
  }
  lines.push(rule(config.width));
  lines.push(`TOTAL ${money(total(bundles))}  ref ${code(42)}`);
  lines.push(config.footer);
  return lines.join('\n');
}

module.exports = { printReceipt };

if (require.main === module) {
  console.log(printReceipt([
    { sku: '  cnd-01', label: ' Candle ', cents: 450 },
    [{ sku: 'pmk-02', label: 'Pumpkin  ', cents: 1299 }, [{ sku: 'cat-13', label: 'Black cat mug', cents: 899 }]],
  ]));
}
