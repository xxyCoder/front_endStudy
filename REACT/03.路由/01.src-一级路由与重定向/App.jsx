import React from 'react'
import Header from './components/Header'
import { Link,Route,Routes,Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
    return (
        <div>
            <Header />
            <div className="list-group">
                <Link className='list-group-item' to="/about">About</Link>
                <br />
                <Link className='list-group-item' to="/home">Home</Link>
            </div>
            <div className="panel-body">
                <Routes>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    {/* Navigate 重定向 */}
                    <Route path='/' element={<Navigate to="/about"/>}></Route>
                </Routes>       
            </div>
        </div>
    )
}
