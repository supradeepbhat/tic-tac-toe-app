import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<button>
            {this.props.value}
        </button>);
    }
}