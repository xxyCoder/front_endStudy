# SPA 单页应用
- 整个应用只有一个完整的页面
- 点击页面中的链接不会刷新,只会更新局部内容
- 数据要通过ajax获取,并在前端异步展示

# 基本使用
1. 导航区的a标签改为Link
2. 展示区写Route标签进行匹配
3. App标签最外层包裹一个BrowserRouter或HashRouter

# 路由组件与一般组件
1. 写法不同
2. 存放位置不同
    - 路由组件放pages目录下
    - 一般组件放components目录下
3. 接收到的props不同
    - 一般组件传入什么接收什么
    - 路由组件接收三个固定属性