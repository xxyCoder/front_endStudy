import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log('Home props',this.props);
        return (
            <div>
                <h2>我是Home的内容</h2>
            </div>
        )
    }
}
