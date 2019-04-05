import React, { Component } from 'react';
import Box from './Box';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxValues: Array(9).fill(null),
            isComputer: false
        }
    }

    handleBoxClick(i){
        let boxValues = [...this.state.boxValues];
        boxValues[i] = 'X';

        this.setState({
            boxValues: boxValues,
            isComputer: !this.state.isComputer
        });

        //Calculate the winner
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
            <table>
                <tr>
                    <td> {this.renderBox(0)}</td>
                    <td> {this.renderBox(1)}</td>
                    <td> {this.renderBox(2)}</td>
                </tr>
                <tr>
                    <td> {this.renderBox(3)}</td>
                    <td>{this.renderBox(4)}</td>
                    <td>{this.renderBox(5)}</td>
                </tr>
                <tr>
                    <td> {this.renderBox(6)}</td>
                    <td>{this.renderBox(7)}</td>
                    <td> {this.renderBox(8)}</td>
                </tr>
            </table>
        </div>);
    }
}

export default Board;
