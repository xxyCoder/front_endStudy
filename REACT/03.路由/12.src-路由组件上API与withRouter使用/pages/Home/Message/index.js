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
    replaceShow = (id,title) => {
        this.props.history.replace(`/home/message/detail/${id}/${title}`);
    }
    pushShow = (id,title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`);
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
                                    <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
                                    &nbsp;
                                    <button onClick={() => this.replaceShow(msg.id,msg.title)}>replace查看</button>
                                    &nbsp;
                                    <button onClick={() => this.pushShow(msg.id,msg.title)}>push查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
            </div>
        )
    }
}
