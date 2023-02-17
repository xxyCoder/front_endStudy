import React, { Component } from 'react'
import RItem from '../RItem'

export default class RList extends Component {
	render() {
		const {todos} = this.props;
		return (
			<div>
				<ul className="todo-main">
					{
						todos.map((todo) => {
							return <RItem key={todo.id} todo={todo} updateTodo={this.props.updateTodo} deleteTodo = {this.props.deleteTodo}/>
						})
					}
				</ul>
			</div>
		)
	}
}
