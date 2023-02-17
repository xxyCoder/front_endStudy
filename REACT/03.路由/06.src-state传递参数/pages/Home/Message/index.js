import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react'

export default function Message() {
    const [messageArr] = useState([
        { id: '001', title: '消息1' },
        { id: '002', title: '消息2' },
        { id: '003', title: '消息3' }
    ])
    return (
        <div>
            <ul>
                {
                    messageArr.map((msg) => {
                        return (
                            <li key={msg.id}>
                                <Link to="detail" state={{
                                    id: msg.id,
                                    title: msg.title
                                }}>{msg.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
