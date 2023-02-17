import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Home/Message'
import News from '../pages/Home/News'
import { Navigate } from 'react-router-dom'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about"/>
    }
]