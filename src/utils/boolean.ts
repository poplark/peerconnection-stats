const BOOL_REGX = /^true|false$/;

export function isBoolean(raw: string): boolean {
  raw += '';
  return BOOL_REGX.test(raw);
}

export function parseBoolean(raw: string): boolean {
  raw += '';
  let result = false;
  if (isBoolean(raw)) {
    result = raw === 'true';
  } else {
    throw new Error('parameter invalid');
  }
  return result;
}