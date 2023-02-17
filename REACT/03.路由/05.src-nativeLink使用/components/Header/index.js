import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('Header props',this.props);
        return (
            <div className="page-header">
                <h1>React Router Demo</h1>
            </div>
        )
    }
}
