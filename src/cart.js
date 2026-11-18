'use strict';
// Cart maths. Items can arrive as nested bundles.
const flatten = require('arr-flatten');
const isNumber = require('is-number');
const trim = require('trim');

function lineItems(bundles) {
  return flatten(bundles).filter((item) => item && isNumber(item.cents));
}

function total(bundles) {
  return lineItems(bundles).reduce((sum, item) => sum + Number(item.cents), 0);
}

function normaliseSku(sku) {
  return trim.left(String(sku)).toUpperCase();
}

module.exports = { lineItems, total, normaliseSku };
