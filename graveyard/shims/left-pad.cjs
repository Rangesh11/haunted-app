'use strict';
// Graveyard Shift replacement for the abandoned "left-pad" package.
// padStart truncates multi-character pads and pads with "false"/"null" text; the original repeats the pad and treats falsy pads as a space, so this does too.
// Behaviour proven equal to the original with property-based tests; see graveyard/proofs/.
module.exports = function leftPad(str, len, ch) {
  str = String(str);
  const missing = len - str.length;
  if (!(missing > 0)) return str;
  if (!ch && ch !== 0) ch = ' ';
  return String(ch).repeat(missing) + str;
};
