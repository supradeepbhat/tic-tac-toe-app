import React, { Component } from 'react';
import Box from './Box';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxValues: Array(9).fill(null)
        }
    }

    handleBoxClick(i){
        let boxValues = [...this.state.boxValues];
        boxValues[i] = 'O';
        this.setState({boxValues: boxValues});
    }

    renderBox(i){
        return ( <Box onClick={()=>{this.handleBoxClick(i)}} value={this.state.boxValues[i]}/>);
    }


    render(){
        return(<div>
            <div>
                {this.renderBox(0)}
                {this.renderBox(1)}
                {this.renderBox(2)}
            </div>
            <div>
                {this.renderBox(3)}
                {this.renderBox(4)}
                {this.renderBox(5)}
            </div>
            <div>
                {this.renderBox(6)}
                {this.renderBox(7)}
                {this.renderBox(8)}
            </div>
        </div>);
    }
}

export default Board;
