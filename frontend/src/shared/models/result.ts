

export type LoadingResult = {
  isLoading: true
};

export type ErrorResult = {
  isLoading: false,
  isError: true,
  error: string
};

export type ResolvedResult<T> = {
  isLoading: false,
  isError: false,
  result: T | null
};

export type Result<T> = LoadingResult | ErrorResult | ResolvedResult<T>;

export function isResultLoading<T>(r: Result<T>): r is LoadingResult {
  return r.isLoading;
}
export function isResultDoneLoading<T>(r: Result<T>): r is ErrorResult | ResolvedResult<T> {
  return !r.isLoading;
}
export function isResultError<T>(r: Result<T>): r is ErrorResult {
  return !r.isLoading && r.isError;
}
export function isResultResolved<T>(r: Result<T>): r is ResolvedResult<T> {
  return !r.isLoading && !r.isError;
}
