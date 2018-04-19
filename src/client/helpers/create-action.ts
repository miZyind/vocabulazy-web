interface IAction<T extends string> {
  type: T;
}

interface IFluxStandardAction<T extends string, P> extends IAction<T> {
  payload: P;
  error?: boolean;
  meta?: any;
}

export default function createAction<T extends string>(type: T): IAction<T>;
export default function createAction<T extends string, P>(type: T, payload: P): IFluxStandardAction<T, P>;
export default function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}
