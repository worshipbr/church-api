import { UseCaseError } from './error';
import { Result } from './result';

export interface IUseCase<I, V = undefined, E = UseCaseError> {
  execute(input?: I): Promise<Result<V, E>>;
}
