// 模式匹配
// Typescript 类型的模式匹配是通过 extends 对类型参数做匹配，
// 结果保存到通过 infer 声明的局部类型变量里，如果匹配就能从该局部变量里拿到提取出的类型。
type p = Promise<"YG">;
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;

type GetResult = GetValueType<Promise<"YG2">>;

// 数组类型
// 数组类型想提取第一个元素的类型
type arr = [1, 2, 3];
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never;
type GetFirstResult = GetFirst<arr>;
// 当然也可以提取最后一个元素
type GetLast1<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;
type GetLastResult1 = GetLast1<arr>;
// 提取剩余数组
type PopArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never;
type PopArrResult1 = PopArr<arr>;
type PopArrResult2 = PopArr<[]>;
// ==========
type ShiftArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [unknown, ...infer Rest]
  ? Rest
  : never;
type ShiftArrResult1 = ShiftArr<arr>;
type ShiftArrResult2 = ShiftArr<[]>;

// StartsWith
// 判断字符串是否以某个前缀开头
type StartsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;
type StartsWithResult1 = StartsWith<"YG", "Y">;

// Replace
// 字符串可以匹配一个模式类型，提取想要的部分，自然也可以用这些再构成一个新的类型
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str;

// 能够匹配和替换字符串，那也就能实现去掉空白字符的 Trim
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimStrRight<Rest>
  : Str;

// 函数
// 函数同样也可以做类型匹配，比如提取参数、返回值的类型
type GetParameters<Func extends Function> = Func extends (
  ...args: infer Args
) => unknown
  ? Args
  : never;
type FuncParams = GetParameters<(a: number, b: string) => string>;
// 提取返回值类型
type GetFunResult<Func extends Function> = Func extends (
  ...args: any[] // 这里不能用unknown
) => infer Result
  ? Result
  : never;
type FuncResult = GetFunResult<(a: number, b: string) => string>;

// this类型
class Dong {
  name: string;

  constructor() {
    this.name = "dong";
  }

  hello(this: Dong) {
    return "hello, I'm " + this.name;
  }
}
const dong = new Dong();

dong.hello.call({ name: "dong2" });
