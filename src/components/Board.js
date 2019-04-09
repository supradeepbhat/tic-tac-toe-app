import React, { Component } from 'react';
import Box from './Box';
import Game from './Game';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxValues: Array(9).fill(null),
            stop: false,
            winner: null
        }
    }

    handleBoxClick(i){
        if(!this.state.stop && !this.state.winner){
            let boxValues = [...this.state.boxValues];
            boxValues[i] = 'X';
            let winner = Game.decideWinner(boxValues);

            //Update the logic to check draw
            //if no winner and the no boxes left to fill

            let emptyBoxes = Game.availableBoxes(boxValues);

           if(!winner && emptyBoxes.length > 0){
                let computerChoice = Game.performComputerTurn(boxValues);
                boxValues[computerChoice] = 'O';
                winner = Game.decideWinner(boxValues);
           } else if(!winner && emptyBoxes.length === 0){
               this.setState({
                   showStop: false
               })
               winner = 'D';
           }

            this.setState({
                boxValues: boxValues,
                winner: winner
            });
        }

    }

    onStop(){
        this.setState({
            stop: !this.state.stop
        })
    }

    renderBox(i){
        return ( <Box onClick={()=>{this.handleBoxClick(i)}} value={this.state.boxValues[i]}/>);
    }


    render(){
        let winnerText = '';
        if(this.state.winner){
            if(this.state.winner === 'O'){
                winnerText = 'The winner is: Computer';
            } else if(this.state.winner === 'X'){
                winnerText = 'The winner is: ' + this.props.user;
            } else {
                winnerText = 'The Match is draw';
            }
        }
        let showStop = !this.state.winner ? (<button onClick={() => this.onStop()}>{!this.state.stop ? 'Stop' : 'Resume'}</button>) : null;
        let showReset = (<button onClick={this.props.onReset}>Reset</button>);
        let stopMessage = this.state.stop ? 'The game is stopped. To continue, press "Resume".': '';
        return(<div>
            <table>
                <tbody>
                    <tr>
                        <table>
                            <tbody>
                            <tr>
                                <td>{this.renderBox(0)}</td>
                                <td>{this.renderBox(1)}</td>
                                <td>{this.renderBox(2)}</td>
                            </tr>
                            <tr>
                                <td>{this.renderBox(3)}</td>
                                <td>{this.renderBox(4)}</td>
                                <td>{this.renderBox(5)}</td>
                            </tr>
                            <tr>
                                <td>{this.renderBox(6)}</td>
                                <td>{this.renderBox(7)}</td>
                                <td>{this.renderBox(8)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </tr>
                    <tr>
                        <table>
                            <tbody>
                            <tr>{winnerText}</tr>
                            <tr>{stopMessage}</tr>
                            <tr>
                                <td>{showStop}{showReset}</td>
                            </tr>
                            </tbody>
                        </table>
                    </tr>
                </tbody>
            </table>

        </div>);
    }
}

export default Board;
