import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>我是Home的内容</h2>
                <hr/>
                <div>
                    <ul>
                        <li>
                            <NavLink to='/home/news'>News</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/message'>Messgae</NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        )
    }
}
