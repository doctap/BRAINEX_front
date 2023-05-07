export const pickProperties = <TObj extends {}, TResults extends {}>(obj: TObj, keys: Array<keyof TObj>): TResults => {
  const result: any = {};

  keys.forEach(k => (result[k] = obj[k]));
  return result;
};
