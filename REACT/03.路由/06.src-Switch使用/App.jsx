import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
import './index.css'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="list-group">

                    <NavLink activeClassName='ac' className='list-group-item' to="/about">About</NavLink>
                    <br />
                    <NavLink activeClassName='ac' className='list-group-item' to="/home">Home</NavLink>
                </div>
                <div className="panel-body">
                    {/* 匹配成功就不会继续匹配下去 */}
                    <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/home" component={Test}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
