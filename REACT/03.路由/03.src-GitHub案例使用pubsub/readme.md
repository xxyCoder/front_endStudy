# 总结
1. ES6解构赋值+重命名
    let obj = {a:{b:1}}
    const {a:{b}} = obj 连续解构
    const {a:{b:value}} = obj 连续解构+重命名
2. 消息订阅与发布
    - 先订阅再发布
    - 适用于任意组件