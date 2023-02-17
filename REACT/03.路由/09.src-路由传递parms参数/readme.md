# 路由组件传递params参数
    路由链接携带参数 <Link to='/demo/tom/17'/>
    注册路由    <Route path="/demo/:name/:age" component={}/>
    接收参数    const {} = this.props.match.params