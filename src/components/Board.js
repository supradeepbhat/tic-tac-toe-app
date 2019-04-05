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

    calculateWinner(boxes){
        let moves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i=0; i< moves.length; i++){
            let [b1, b2, b3] = moves[i];
            if(boxes[b1] && boxes[b1] === boxes[b2] && boxes[b1] === boxes[b3]){
                return boxes[b1];
            }
        }

        return null;
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
