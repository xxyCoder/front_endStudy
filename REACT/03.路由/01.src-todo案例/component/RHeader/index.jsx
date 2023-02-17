import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class RHeader extends Component {
	handleKeyUp = (Event) => {
		// 按回车添加
		if(Event.keyCode !== 13 || Event.target.value.trim() === '') {
			return ;
		}
		// console.log(Event.target.value);
		const todo = {
			id:nanoid(),
			name:Event.target.value,
			done: false
		};
		// 将todo传递给对象
		this.props.addTodo(todo);
		// 清空
		Event.target.value = '';
	}
	render() {
		return (
			<div className='todo-header'>
				<input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称，按回车确认'/>
			</div>
		)
	}
}
