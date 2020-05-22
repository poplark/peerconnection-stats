function getType(val: any): string {
  return Object.prototype.toString.call(val);
}

export function isUndefined(val: any): boolean {
  return '[object Undefined]' === getType(val);
}

export function isNull(val: any): boolean {
  return '[object Null]' === getType(val);
}