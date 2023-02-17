import React, { Component } from 'react'
export default class RItem extends Component {
	state = {
		mouse:false
	}
	handleMouse = (flag) => {
		return () => {
			this.setState({
				mouse:flag
			})
		}
	}
	handleCheck = (id) => {
		return (e) => {
			// console.log(id,e.target.checked);
			this.props.updateTodo(id,e.target.checked);
		}
	}
	handleDelete = (id) => {
		this.props.deleteTodo(id);
	}
	render() {
		const { todo } = this.props;
		return (
			<li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
				<label>
					{/* defaultChecked允许后期改动,checked写死了 */}
					<input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
					<span>{todo.name}</span>
				</label>
				<button onClick={() => this.handleDelete(todo.id)} className="btn btn-danger" style={{ display:this.state.mouse ? 'inline-block':'none'}}>删除</button>
			</li>
		) 
	}
}
