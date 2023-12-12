export class UseCaseError {
  exception: string;
  stack: string;
  message: string;
  additionalData: Record<string, unknown>;

  constructor(
    message: string,
    error?: Error,
    additionalData?: Record<string, unknown>,
  ) {
    this.message = message;

    if (error) {
      this.exception = error.message;
      this.stack = error.stack;
    }

    if (additionalData) {
      this.additionalData = additionalData;
    }
  }

  static error(
    message: string,
    additionalData?: Record<string, unknown>,
  ): UseCaseError {
    return new UseCaseError(message, undefined, additionalData);
  }
}
