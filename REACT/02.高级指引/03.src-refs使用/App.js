import React, { Component } from 'react'
import CustomTextInput from './components/CustomTextInput'
import AutoFocusTextInput from './components/AutoFocusTextInput'
import MyComponent from './components/MyComponent'

export default class App extends Component {
	render() {
		return (
			<div>
				<CustomTextInput/>
				<AutoFocusTextInput/>
				<MyComponent/>
			</div>
		)
	}
}