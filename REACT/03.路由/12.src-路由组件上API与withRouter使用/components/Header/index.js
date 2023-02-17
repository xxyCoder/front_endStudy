import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
    back() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="page-header">
                <h1>React Router Demo</h1>
                <button onClick={() => this.back()}>回退</button>
            </div>
        )
    }
};

// 解决一般组件使用路由组件API问题
export default withRouter(Header);