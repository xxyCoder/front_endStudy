class Father {
    constructor(money) {
        this.money = money;
    }
    sayMoney() {
        console.log(`money is ${this.money}`);
    }
}

class Son extends Father {
    constructor(money) {
        super(money);
    }
    // 扩展自己的方法
    say() {
        console.log('extends father');
    }
};

let s1 = new Son(200);
s1.sayMoney();
s1.say();