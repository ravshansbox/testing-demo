export type TElementOf<TArray extends readonly unknown[]> =
  TArray extends readonly (infer TElement)[] ? TElement : never;
