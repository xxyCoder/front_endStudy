import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            {id:'001',title:'消息1'},
            {id:'002',title:'消息2'},
            {id:'003',title:'消息3'}
        ]
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msg) => {
                            return (
                                <li key={msg.id}>
                                    <Link to={{pathname: '/home/message/detail',state: {
                                        id: msg.id,
                                        title: msg.title
                                    }}}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 声明并接收state参数 正常注册路由即可*/}
                <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        )
    }
}
