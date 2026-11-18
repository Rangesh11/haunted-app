'use strict';
// Merges defaults, environment and user options.
const assign = require('object-assign');
const extend = require('xtend');

const DEFAULTS = { currency: 'USD', width: 32, footer: 'Thank you for shopping after dark' };

function loadConfig(user) {
  const fromEnv = process.env.RECEIPT_WIDTH ? { width: Number(process.env.RECEIPT_WIDTH) } : {};
  return extend(DEFAULTS, fromEnv, user || {});
}

function withOverrides(config, overrides) {
  return assign({}, config, overrides);
}

module.exports = { loadConfig, withOverrides };
