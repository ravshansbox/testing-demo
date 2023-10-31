import { numbers, operators } from './constants';

export type TElementOf<TArray extends readonly unknown[]> =
  TArray extends readonly (infer TElement)[] ? TElement : never;

export type TNumber = TElementOf<typeof numbers>;

export type TOperator = TElementOf<typeof operators>;
