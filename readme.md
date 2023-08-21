# typescript

- 虽然在工作中会使用 ts，但好像使用的 ts 都不够深入，特以此仓库来深入学习 ts，详情看代码文件中的注释，会尽可能覆盖所有 ts 使用案例

## 模式匹配

- 就像字符串可以匹配一个模式串提取子组一样，TypeScript 类型也可以匹配一个模式类型提取某个部分的类型
- TypeScript 类型的模式匹配是通过类型 extends 一个模式类型，把需要提取的部分放到通过 infer 声明的局部变量里，后面可以从这个局部变量拿到类型做各种后续处理。
