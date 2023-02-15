import React from 'react'
// 里面传入一个默认值
const ThemeContext = React.createContext('light');

export default class App extends React.Component {
	render() {
		// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。    
		// 无论多深，任何组件都能读取这个值。    
		return (
			<ThemeContext.Provider value="dark">
				<Toolbar />
			</ThemeContext.Provider>
		);
	}
}

// 中间的组件再也不必指明往下传递 theme 了
function Toolbar() {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

class ThemedButton extends React.Component {
	// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象
	// 这能让你使用 this.context 来消费最近 Context 上的那个值
	// 指定 contextType 读取当前的 theme context。  
	// React 会往上找到最近的 theme Provider，然后使用它的值。 
	static contextType = ThemeContext;
	render() {
		return <Button theme={this.context} />;
	}
}
class Button extends React.Component {
	render() {
		return (
			<div>
				{this.props.theme}
			</div>
		)
	}
}