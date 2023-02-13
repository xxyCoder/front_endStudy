import React, { Component } from 'react'

export default class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        // 函数回调形式
        this.setTextInputRef = element => {
            this.textInput2 = element;
        }
    }
    focusTextInput = () => {
        console.log(this.textInput.current);
        this.textInput.current.focus();
    }
    focusTextInput2 = () => {
        if(this.textInput2) this.textInput2.focus();
    }
    focusTextInput3 = () => {
        if(this.textInput3) this.textInput3.focus();
    }
    focusTextInput4 = () => {
        if(this.refs.textInput4) this.refs.textInput4.focus();
    }
    render() {
        return (
            <div>
                <h2>创建对象</h2>
                <input type="text" ref={this.textInput} />        
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
                <h2>回调函数</h2>
                <input type="text" ref={this.setTextInputRef} />        
                <input type="button" value="Focus the text input" onClick={this.focusTextInput2} />
                <h2>简写回调函数</h2>
                <input type="text" ref={el => this.textInput3 = el} />        
                <input type="button" value="Focus the text input" onClick={this.focusTextInput3} />
                <h2>字符串形式</h2>
                <input type="text" ref="textInput4" />        
                <input type="button" value="Focus the text input" onClick={this.focusTextInput4} />
            </div>
        )
    }
}
