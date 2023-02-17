# Reducer
- reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state
- 别在reducer中做以下事情
    1. 修改传入参数
    2. 执行有副作用的操作，如API请求和路由跳转
    3. 调用非纯函数，如Date.now()