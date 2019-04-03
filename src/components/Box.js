import React, { Component } from 'react';
import './styles/Box.css';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<button onClick={this.props.onClick} className="cell">
            {this.props.value}
        </button>);
    }
}

export default Box;