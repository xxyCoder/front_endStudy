import React, { Component } from 'react'

export default class RFooter extends Component {
    handleCheckAll = (e) => {
        console.log(e.target.checked);
        this.props.checkAllTodo(e.target.checked);
    }
    handleClearAll = () => {
        this.props.clearAllDone();
    }
    render() {
        const {todos} = this.props;
        // 统计完成个数
        const doneCount = todos.reduce((pre,todo) => {
            return todo.done ? pre + 1 : pre;
        },0);
        const total = todos.length;
        return (
            <div className="todo-footer" style={{display:total !== 0 ? 'block':'none'}}>
                <label htmlFor="">
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
                </label>
                <span>
                <span>已经完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAll} className="btn btn-danger">清除已经完成任务 </button>
            </div>
        )
    }
}
