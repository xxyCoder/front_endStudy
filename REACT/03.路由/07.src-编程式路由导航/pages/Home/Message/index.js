import { Link, Outlet,useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

export default function Message() {
    const navigate = useNavigate();

    const [messageArr] = useState([
        { id: '001', title: '消息1' },
        { id: '002', title: '消息2' },
        { id: '003', title: '消息3' }
    ])
    function showDetail(msg) {
        navigate('detail',{
            replace: false,
            state: {
                id:msg.id,
                title: msg.title
            }
        });
    }
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
                                &nbsp;
                                <button onClick={() => showDetail(msg)}>查看详情</button>
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
