import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Detail() {
    const [detailArr] = useState([
        { id: '001', content: '我爱中国' },
        { id: '002', content: '我爱中国!' },
        { id: '003', content: '我爱中国!!' }
    ])
    const {id,title} = useParams();
    const ret = detailArr.find(d => {
        return id === d.id;
    });
    return (
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{ret.content}</li>
        </ul>
    )
}
