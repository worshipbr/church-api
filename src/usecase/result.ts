export class Result<T, E = Record<string, unknown>> {
  private _value: T | undefined;
  public isSuccess: boolean;
  public isFail: boolean;
  public error: E | undefined;

  public constructor(isSuccess: boolean, error?: E, value?: T) {
    this.isSuccess = isSuccess;
    this.isFail = !isSuccess;

    if (error) {
      this.error = error;
    }

    if (value) {
      this._value = value;
    }
  }

  public getValue(): T {
    return this._value;
  }

  static ok<V = undefined>(value?: V): Result<V, undefined> {
    return new Result<V, undefined>(true, undefined, value);
  }

  static fail<R = undefined>(error?: R): Result<undefined, R> {
    return new Result<undefined, R>(false, error);
  }
}
