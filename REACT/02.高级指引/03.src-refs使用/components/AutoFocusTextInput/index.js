import React, { Component } from 'react'
import CustomTextInput from '../CustomTextInput';

export default class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        )
    }
}
