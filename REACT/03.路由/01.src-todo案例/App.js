import React, {Component} from 'react'
import RHeader from './component/RHeader'
import RList from './component/RList'
import RFooter from './component/RFooter'

export default class App extends Component {
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'代码',done:false},
        {id:'003',name:'锻炼',done:false}
    ]}
    addTodo = (todo) => {
        const {todos} = this.state;
        const newTodos = [todo,...todos];
        this.setState({
            todos:newTodos
        });
    }
    updateTodo = (id,done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.done = done;
            }
            return todo;
        });
        this.setState({
            todos:newTodos
        })
    }
    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({
            todos: newTodos
        });
    }
    checkAllTodo = (flag) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            todo.done = flag;
            return todo
        });
        this.setState({
            todos: newTodos
        });
    }
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.done === false;
        });
        this.setState({
            todos: newTodos
        });
    }
    render() {
        return ( 
            <div>
                <RHeader addTodo={this.addTodo}/>
                <RList todos={this.state.todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
                <RFooter todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
        )
    }
}