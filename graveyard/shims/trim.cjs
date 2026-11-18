'use strict';
// Graveyard Shift replacement for the abandoned "trim" package.
// Built-in trimming runs in linear time, which removes the ReDoS in trim < 0.0.3.
// Behaviour proven equal to the original with property-based tests; see graveyard/proofs/.
function trim(str) {
  return str.trim();
}
module.exports = trim;
module.exports.left = function left(str) {
  return str.trimStart();
};
module.exports.right = function right(str) {
  return str.trimEnd();
};
