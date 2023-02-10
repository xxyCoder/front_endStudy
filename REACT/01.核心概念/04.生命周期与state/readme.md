# state
1. 是私有的，完全受控于当前组件
2. 不要直接修改state，浅比较，不会重新渲染页面
3. 修改数据使用setState
4. 更新可能是异步的，React会将多个setState合并成一个调用
    - 解决方法，让setState接收一个函数而非对象，第一个参数为state,第二个参数为props

# 生命周期
1. componentDidMount
    - 组件已经渲染到DOM后执行