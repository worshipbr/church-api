export function CreateObject<T>(construct: new () => T, value: {}): T {
  const obj: T = new construct();
  for (const key of Object.keys(value)) {
    obj[key] = value[key];
  }

  return obj;
}
