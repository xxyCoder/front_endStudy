# render prop
- 是一个用于告知组件需要渲染什么内容的函数 prop。
- 重要的是要记住，render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式。
- 如果你在 render 方法里创建函数，那么使用 render prop 会抵消使用 React.PureComponent 带来的优势。因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 render 对于 render prop 将会生成一个新的值。
    - 解决方案
        将回调函数改成实例方法，方法中返回渲染结果