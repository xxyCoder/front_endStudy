import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class App extends Component {
	render() {
		// console.log(this.props.children);
		return (
			<div>
				{this.props.children}
				<h1>Hello,{this.props.name}</h1>
			</div>
		)
	}
}
App.defaultProps  = {
	name:"xxy"
};
App.propTypes = {
	name: PropTypes.string,
	// 限制单个元素
	children: PropTypes.element.isRequired
};