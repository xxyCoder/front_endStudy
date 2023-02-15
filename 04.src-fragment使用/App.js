import React, { Component } from 'react'
import Columns from './components/Columns'
import Columns2 from './components/Columns2'

export default class App extends Component {
	render() {
		return (
			<table>
				<tr>
					<Columns/>
				</tr>
				<tr>
					<Columns2/>
				</tr>
			</table>
		)
	}
}