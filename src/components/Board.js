import React, { Component } from 'react';
import Box from './Box';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxValues: Array(9).fill(null),
            winner: null
        }
    }

    handleBoxClick(i){
        if(!this.state.winner){
            let boxValues = [...this.state.boxValues];
            boxValues[i] = 'X';
            let winner = this.decideWinner(boxValues);

           if(!winner){
                let random = Math.floor(Math.random()*10);
                while(boxValues[random]){
                    random = Math.floor(Math.random()*10);
                }
                boxValues[random] = 'O';
                winner = this.decideWinner(boxValues);

            }

            this.setState({
                boxValues: boxValues,
                winner: winner
            });
        }

    }

    renderBox(i){
        return ( <Box onClick={()=>{this.handleBoxClick(i)}} value={this.state.boxValues[i]}/>);
    }

    decideWinner(boxes){
        const possibleMoves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i=0; i< possibleMoves.length; i++){
            let [b1, b2, b3] = possibleMoves[i];
            if(boxes[b1] && boxes[b1] === boxes[b2] && boxes[b1] === boxes[b3]){
                return boxes[b1];
            }
        }

        return null;
    }


    render(){
        return(<div>
            <table>
                <tbody>
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
                </tbody>
            </table>
        </div>);
    }
}

export default Board;
