'use strict';
// Fetches live prices. Not called in the offline demo.
const request = require('request');

function fetchPrices(url, cb) {
  request({ url, json: true }, (err, res, body) => {
    if (err) return cb(err);
    cb(null, body);
  });
}

module.exports = { fetchPrices };
