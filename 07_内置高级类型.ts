type Person = typeof person;

const person = {
  name: "Tom",
};

function hello(this: Person, a: Person) {
  console.log(this.name);
  console.log(a);
}

hello.call(person, person);
// 获取到函数的this
type test = ThisParameterType<typeof hello>;

//用于创建索引类型，传入 key 和值的类型
type TestRecord = Record<"name" | "age", string>;

// 实现过滤
type TestPick = Pick<TestRecord, "name">;

// 只读
type TestReadonly = Readonly<TestRecord>;

// 变成可选
type TestPartial = Partial<TestRecord>;

// 去除可选
type TestRequired = Required<TestPartial>;

// 联合类型去除掉部分类型
type TestExclude = Exclude<"a" | "b" | "c", "a">;

// 联合类型保留部分类型
type TestExtract = Extract<"a" | "b" | "c", "a">;

// 删除一部分索引
type TestOmit = Omit<TestRecord, "name">;

// 取出嵌套 Promise 的值的类型
type TestAwaited = Awaited<Promise<Promise<number>>>;

// 用于判断是否为非空类型，也就是不是 null 或者 undefined 的类型的
type TestNull = NonNullable<null>;
type TestNotNull = NonNullable<"aaa">;

export {};
