import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import './index.css'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="list-group">
                    {/* <a href="./about.html" className="list-group-item">About</a>
                        <a href="./home.html" className="list-group-item">Home</a> */}
                    {/* 编写路由链接 */}
                    <NavLink activeClassName='ac' className='list-group-item' to="/about">About</NavLink>
                    <br />
                    <NavLink activeClassName='ac' className='list-group-item' to="/home">Home</NavLink>
                </div>
                <div className="panel-body">
                    {/* 注册路由 */}
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                </div>
            </div>
        )
    }
}
