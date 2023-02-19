# 构造函数
- 特殊的函数，通过new调用
    1. 创建一个对象
    2. 将this指向该对象
    3. 操作
    4. 返回该对象

# 原型对象 prototype
- 每个函数都有该属性

# 对象原型 __proto__ 
- 每个对象都有该属性
- 存在意义是为对象查找机制提供方向

# constructor
- 记录该对象引用了哪个构造函数

# 原型链
- 对象中的__proto__指向prototype，prototype也是对象，故也有__proto__，该对象的__proto__又指向上一级的prototype，一直到Object，Object的prototype的__proto__指向null，也就是终点