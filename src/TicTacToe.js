import React, { Component } from 'react';
import Board from './components/Board';

class TicTacToe extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            userError: false
        }
    }

    onNameChange(event){
        this.setState({
            user: event.target.value
        })
    }

    onSubmitForm(event){
        event.preventDefault();
        this.setState({
            formSubmitted: true
        })

    }

    onReset(){
        this.setState({
           user: '',
           formSubmitted: false
        });
    }


    render(){
        let userForm = (<div>
            <form onSubmit={(event) => {this.onSubmitForm(event)}}>
                <label>
                    <span>Please enter player name: </span>
                    <input type="text" value={this.state.user} onChange={(event) => {this.onNameChange(event)}} required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>);

        let game = this.state.formSubmitted ? (<Board user={this.state.user} onReset={() => {this.onReset()}}/>) : userForm;
        return (<div>
            <h1>Welcome to Tic Tac Toe</h1>
            {game}
        </div>);
    }
}

export default TicTacToe;