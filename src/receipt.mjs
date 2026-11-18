// ESM entry used by the web front end.
import leftPad from '../graveyard/shims/left-pad.cjs';
import dayjs from 'dayjs';

export function stamp(date, seq) {
  return `${dayjs(date).format('YYYY-MM-DD')} #${leftPad(seq, 5, '0')}`;
}
