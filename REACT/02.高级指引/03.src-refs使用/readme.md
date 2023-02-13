# refs
1. 创建refs
    React.createRef()
- 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问
    - 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
    - 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
    - 你不能在函数组件上使用 ref 属性，因为他们没有实例。
- React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值
- ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新
2. 回调refs
3. 字符串形式