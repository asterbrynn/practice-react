import React, {Component} from 'react';

export default class Wolf extends Component {
    constructor() {
        super()
        this.state = {
            isWolfBig: false,
            borderColor: ''
        }
    }

    handleClick = () => {
        this.setState({
            isWolfBig: !this.state.isWolfBig
        })
    }

    handleColorChange = e => {
        this.setState({
            borderColor: e.target.value
        })
    }

    render() {
        let wolfStyle = this.state.isWolfBig ? {height: 600, width: 900} : {height: 300, width: 600};
        let borderStyle = this.state.borderColor ? {border: `10px solid ${this.state.borderColor}`} : null;
        return (
            <div style={{...borderStyle, padding: 40}}>
                <input type="text" onChange={this.handleColorChange} placeholder="color"/>
                <button onClick={this.handleClick}>Toggle Wolf Size</button>
                <img style={wolfStyle} src="https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="wolf"/>
            </div>
        )
    }
}