'use strict';
// Formatting helpers for the receipt printer.
const leftPad = require('left-pad');
const repeat = require('repeat-string');
const trim = require('trim');

function money(cents) {
  const value = (cents / 100).toFixed(2);
  return leftPad(value, 10);
}

function rule(width) {
  return repeat('-', width);
}

function cleanLabel(label) {
  return trim(String(label));
}

function code(n) {
  return leftPad(n, 6, 0);
}

module.exports = { money, rule, cleanLabel, code };
