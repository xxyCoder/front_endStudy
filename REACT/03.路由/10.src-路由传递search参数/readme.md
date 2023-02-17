# 路由组件传递search参数
    注册路由 无需携带参数
    接收参数 const {search} = this.props.location
    获取的参数是ulrencoded编码字符串，需要借助querystring解析