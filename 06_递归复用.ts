// Promise
type ttt = Promise<Promise<Promise<Record<string, any>>>>;

type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<
  infer ValueType
>
  ? ValueType extends Promise<unknown>
    ? DeepPromiseValueType<ValueType>
    : ValueType
  : never;

type DeepPromiseResult = DeepPromiseValueType<
  Promise<Promise<Promise<Record<string, any>>>>
>;
// 简化
type DeepPromiseValueType2<T> = T extends Promise<infer ValueType>
  ? DeepPromiseValueType2<ValueType>
  : T;

type DeepPromiseResult2 = DeepPromiseValueType2<
  Promise<Promise<Promise<Promise<Record<string, any>>>>>
>;

// 数组类型的递归
type arr = [1, 2, 3, 4, 5];
type ReverseArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest
]
  ? [...ReverseArr<Rest>, First]
  : Arr;

// 查找元素
type Includes<Arr extends unknown[], FindItem> = Arr extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, FindItem> extends true
    ? true
    : Includes<Rest, FindItem>
  : false;

type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);
