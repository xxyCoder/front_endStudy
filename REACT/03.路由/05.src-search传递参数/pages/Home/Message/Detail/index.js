import React, { useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
export default function Detail() {
    const [detailArr] = useState([
        { id: '001', content: '我爱中国' },
        { id: '002', content: '我爱中国!' },
        { id: '003', content: '我爱中国!!' }
    ])
    // 第二个是更新收到的参数
    const [search,setSeatch] = useSearchParams();
    const id = search.get('id');
    const title = search.get('title');
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
