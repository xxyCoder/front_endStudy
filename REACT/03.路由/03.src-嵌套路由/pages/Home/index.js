import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <h2>我是Home的内容</h2>
            <hr />
            <div>
                <ul>
                    <li>
                        {/* router6可以不写父级 */}
                        <Link to='news'>News</Link>
                    </li>
                    <li>
                        <Link to='message'>Messgae</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}
