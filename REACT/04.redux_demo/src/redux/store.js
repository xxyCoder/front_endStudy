// Store 就是把它们联系到一起的对象
// 维持 应用的state
// 提供 getState()方法获取state
// dispatch(action) 更新state
// subscribe(listener) 注册监听器 和 返回函数注销监听器
// Redux 应用只有一个单一的 store

import {createStore} from 'redux'
import todoApp from './Reducers/todo.js'

// 第二个参数是可选的, 用于设置 state 初始状态
let store = createStore(todoApp);
export default store;