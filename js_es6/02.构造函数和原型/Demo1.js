function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sing = function() {
        console.log('~~~~');
    };
}

let p1 = new Person('xxx',20);
p1.sing();
let p2 = new Person('xxx',20);

// 静态成员
Person.home = 'China';
// console.log(p1.home);
console.log(Person.home);
console.log(p1.sing === p2.sing);   // 比较浪费内存，sing应该是共享的
console.log(Person.prototype,typeof Person.prototype,Object.prototype.toString.call(Person.prototype));
// solve
Person.prototype.say = function() {
    console.log('Hello prototype');
};
p1.say();
console.log(p1.say === p2.say);
// __proto__
console.log(p1.__proto__,typeof p1.__proto__,Object.prototype.toString.call(p1.__proto__));
console.log(p1.__proto__ === Person.prototype);
// constructor
console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor === p1.__proto__.constructor);
// 原型链
console.log(Person.prototype.__proto__);
console.log(Object.prototype.__proto__);
console.log(Person.prototype.__proto__ === Object.prototype);
Object.prototype.hey = function() {
    console.log("hi");
};
console.log(Person.prototype.__proto__);