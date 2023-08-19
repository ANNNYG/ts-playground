// ts支持类型编程的类型系统
// 在 JavaScript 里面，对象可以字面量的方式创建，还可以灵活的增删属性，
// 拿到对象并不能确定什么，所以要支持对传入的类型参数做进一步的处理。
// 对传入的类型参数（泛型）做各种逻辑运算，产生新的类型，这就是类型编程。

// 一个函数 返回传入类型对象的key对应的属性值
// 类型应该怎么写

function getPropValue1(obj, key) {
  return obj[key];
}

function getPropValue2<T extends object, Key extends keyof T>(
  obj: T,
  key: Key
): T[Key] {
  return obj[key];
}

export {};
