export {}; // 模块化
// 条件
// extends ? : (ts中的if else)
// TypeScript 里的条件判断是 extends ? : 叫做条件类型（Conditional Type）比如
type res = 1 extends 2 ? true : false;

// 类型运算逻辑都是用来做一些动态的类型的运算的，也就是对类型参数的运算。
type isTwo<T> = T extends 2 ? true : false;

type res1 = isTwo<1>;
type res2 = isTwo<2>;

// 推导: infer
// infer 取类型的一部分呢
// 第一个 extends 不是条件，条件类型是 extends ? :这里的 extends 是约束的意思，也就是约束类型参数只能是数组类型。
type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R]
  ? T
  : never;

type res3 = First<[1, 2, 3]>;

// 联合: |
// 联合类型（Union）类似 js 里的或运算符 |，但是作用于类型，代表类型可以是几个类型之一。
type Union = 1 | 2 | 3;

// 交叉: &
// 交叉类型（Intersection）类似 js 中的与运算符 &，但是作用于类型，代表对类型做合并
type ObjType = { a: number } & { c: boolean };
const obj1: ObjType = { a: 1, c: true };
// 同一类型可以合并，不同的类型没法合并，会被舍弃 变成 never
type testRes = "1111" & 2222;

// 映射类型
// 映射类型就相当于把一个集合映射到另一个集合，这是它名字的由来。
// 对象、class 在 TypeScript 对应的类型是索引类型（Index Type），那么如何对索引类型作修改呢？
// keyof T 是查询索引类型中所有的索引，叫做索引查询。
// T[Key] 是取索引类型某个索引的值，叫做索引访问。
type MapType1<T> = {
  [Key in keyof T]?: T[Key];
};
type MapType2<T> = {
  [Key in keyof T]: [T[Key], T[Key], T[Key]];
};
type res4 = MapType2<{ a: 1; b: 2 }>;

type MapType3<T> = {
  [Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: [
    T[Key],
    T[Key],
    T[Key]
  ];
};
type res5 = MapType3<{ a: 1; b: 2 }>;
