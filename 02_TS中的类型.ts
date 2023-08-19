// 元组
// 元组（Tuple）就是元素个数和类型固定的数组类型

type Tuple = [number, string];
const arr: Tuple = [1, "2"];

// 接口
// 接口（Interface）可以描述函数、对象、构造器的结构
interface IPerson {
  name: string;
  age: number;
}
class Person implements IPerson {
  [prop: string]: string | number;
  age: number;
  name: string;
}
const obj: IPerson = {
  age: 1,
  name: "2",
};

// 函数
type TSayHello = (name: string) => string;
interface ISayHello {
  (name: string): string;
}
const func1: ISayHello = (name: string) => "hello," + name;
const func2: TSayHello = (name: string) => "hello," + name;

// 构造器
interface IPersonConstructor {
  new (name: string, age: number): IPerson;
}
type TPersonConstructor = new (name: string, age: number) => IPerson;

function createPerson1(ctor: IPersonConstructor): IPerson {
  return new ctor("light", 18);
}
function createPerson2(ctor: TPersonConstructor): IPerson {
  return new ctor("light", 18);
}

// 对象类型、class 类型在 TypeScript 里也叫做索引类型，也就是索引了多个元素的类型的意思。
// 对象可以动态添加属性，如果不知道会有什么属性，可以用可索引签名
interface IPerson1 {
  [prop: string]: string | number;
}
const obj1: IPerson1 = {};
obj1.name = "guang";
obj1.age = 18;

// 枚举
// 枚举（Enum）是一系列值的复合
enum Transpiler {
  Babel = "babel",
  Postcss = "postcss",
  Terser = "terser",
  Prettier = "prettier",
  TypeScriptCompiler = "tsc",
}

const transpiler = Transpiler.TypeScriptCompiler;

// 约束字符串开头
type StartsWith = `#${string}`;
const startsWithStr: StartsWith = "#11";

// 还有四种特殊的类型：void、never、any、unknown：

// never 代表不可达，比如函数抛异常的时候，返回值就是 never。
// void 代表空，可以是 undefined 或 never。
// any 是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型（除了 never）。
// unknown 是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。

// 类型的装饰
// 除了描述类型的结构外，TypeScript 的类型系统还支持描述类型的属性，比如是否可选，是否只读等
interface IPerson3 {
  readonly name: string;
  age?: number;
}

type tuple = [string, number?];

export {};
