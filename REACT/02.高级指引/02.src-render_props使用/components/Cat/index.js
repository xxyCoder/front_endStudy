import React, { Component } from 'react'

export default class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{backgroundColor: 'green',position: 'absolute',left: mouse.x,top: mouse.y,height: '300px',width: '300px'}}></div>
        )
    }
}
