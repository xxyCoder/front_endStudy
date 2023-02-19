// 1. 创建对象
class Person {
    // 构造函数
    constructor(name) {
        this.name = name;
    }
    // 共有的方法
    say() {
        console.log("my name is " + this.name);
    }
}

// 2.生成对象
let p1 = new Person("p1");
p1.say();