const INT_REGX = /^-?(?:0|[1-9][0-9]*)$/;
const FLOAT_REGX = /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/;

export function isInt(raw: string): boolean {
  raw += '';
  return INT_REGX.test(raw);
}

export function isFloat(raw: string): boolean {
  raw += '';
  return FLOAT_REGX.test(raw);
}

export function isNumber(raw: string): boolean {
  raw += '';
  return isInt(raw) || isFloat(raw);
}

export function parseNumber(raw: string): number {
  raw += '';
  let result: number | string;
  if (isInt(raw)) {
    result = parseInt(raw, 10);
  } else if (isFloat(raw)) {
    result = parseFloat(raw);
  } else {
    throw new Error('parameter invalid')
  }
  return result;
}