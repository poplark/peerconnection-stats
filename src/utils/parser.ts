import { isNumber, parseNumber } from './number';
import { isBoolean, parseBoolean } from './boolean';

export function parse(raw: string): string | number | boolean {
  raw += '';
  if (isBoolean(raw)) {
    return parseBoolean(raw);
  } else if (isNumber(raw)) {
    return parseNumber(raw);
  } else {
    return raw;
  }
}
