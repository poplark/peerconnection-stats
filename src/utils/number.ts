const INT_REGX = /^-?(?:0|[1-9][0-9]*)$/;
const FLOAT_REGX = /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/;

function isInt(raw: string): boolean {
  return INT_REGX.test(raw);
}
function isFloat(raw: string): boolean {
  return FLOAT_REGX.test(raw);
}

export interface NumberParsedResult {
  isNumber: boolean
  value: number | string
}

export function parse(raw: string): NumberParsedResult {
  raw += '';
  let isNumber = false;
  let result: number | string;
  if (isInt(raw)) {
    isNumber = true;
    result = parseInt(raw, 10);
  } else if (isFloat(raw)) {
    isNumber = true;
    result = parseFloat(raw);
  } else {
    result = raw;
  }

  return {
    isNumber,
    value: result
  }
}