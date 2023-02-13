import React, { Component } from 'react'

export default class Mouse extends Component {
    state = {
        x: 0,
        y: 0
    };
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
        console.log(this.state);
    }
    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}
