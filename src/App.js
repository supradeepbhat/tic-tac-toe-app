import React, { Component } from 'react';
import TicTacToe from './TicTacToe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <TicTacToe/>
        </header>
      </div>
    );
  }
}

export default App;
