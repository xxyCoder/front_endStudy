import React from 'react'
import Header from './components/Header'
import { Link,useRoutes } from 'react-router-dom'
import route from './routes/index'

export default function App() {
    const element = useRoutes(route);
    return (
        <div>
            <Header />
            <div className="list-group">
                <Link className='list-group-item' to="/about">About</Link>
                <br />
                <Link className='list-group-item' to="/home">Home</Link>
            </div>
            <div className="panel-body">
                {element}      
            </div>
        </div>
    )
}
