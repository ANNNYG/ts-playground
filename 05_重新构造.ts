// 数组类型的重新构造
// 给元组再添加一些类型
type Push<Arr extends unknown[], Ele> = [...Arr, Ele];
type PushResult = Push<[1, 2, 3], 4>;

// 数组合并
type tuple1 = [1, 2];
type tuple2 = ["a", "b"];
type Zip<
  One extends [unknown, unknown],
  Other extends [unknown, unknown]
> = One extends [infer OneFirst, infer OneSecond]
  ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
    : []
  : [];
type ZipResult = Zip<[1, 2], ["a", "b"]>;

// 合并多个(递归)
type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer OneRest
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
    : []
  : [];
type Zip2Result = Zip2<[1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]>;

// 字符串类型的重新构造
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : Str;
type CapitalizeResult = CapitalizeStr<"abc">;

type CamelCase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
    : Str;
type CamelCaseResult = CamelCase<"hello_world_My">;

type DropSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
  : Str;
type DropSubStrResult = DropSubStr<"hello_world_hello", "hello">;

// 函数类型的重新构造
type AppendArgument<Func extends Function, Arg> = Func extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never;

// 索引类型的重新构造
type obj = {
  name: string;
  age: number;
  gender: boolean;
};

type Mapping<Obj extends object> = {
  [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]];
};

type UppercaseKey<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key];
};

export {};
