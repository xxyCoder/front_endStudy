import React, { Component } from 'react'

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
        const {id,title} = this.props.match.params;
        const findResult = this.state.detailArr.find((d) => {
            return d.id === id;
        });
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
