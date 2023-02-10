# Vue
1. 可以像绑定普通property一样在模板中绑定计算属性，所依赖的属性发生改变，会重新调用computed方法
2. computed vs methods
    - 计算属性是基于它们的响应式依赖进行缓存的，多次调用只执行一次
    - 方法调用多少次，执行多少次
3. computed vs watch
    - 计算属性必须有返回值，并且是同步的
    - watch可以是异步的，不一定有返回值