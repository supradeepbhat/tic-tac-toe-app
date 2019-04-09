import React, { Component } from 'react';
import './styles/Box.css';

/**
 * React Component representing individual boxes
 * */
class Box extends Component {

    render(){
        return(<button onClick={this.props.onClick} className="cell">
            {this.props.value}
        </button>);
    }
}

export default Box;