import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
    state = {
        detailArr: [
            {id:'001',content:'我爱中国'},
            {id:'002',content:'我爱中国!'},
            {id:'003',content:'我爱中国!!'}
        ]
    }
    render() {
        // console.log(this.props);
        const {search} = this.props.location;
        const {id,title} = qs.parse(search.slice(1));

        const rs = this.state.detailArr.find((d) => {
            return d.id === id;
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{rs.content}</li>
            </ul>
        )
    }
}
