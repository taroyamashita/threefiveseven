import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/Board.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Three Five Seven 
          </p>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
