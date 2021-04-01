// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Player from './Player';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="block">
      <p>Connect four is a vertical game of tic-tac-toe, but with a twist-you have to get four in a row. 
        The first player to get four checkers lined up in a row in any direction-horizontal, vertical, 
        or diagonal-wins the game</p>
      <p>The standard game size for a Connect 4 game is a 6x7 grid consisting of 42 cells.</p>
      <p>Each player takes turns dropping a token into a column — which drops to the lowest available slot. 
        Once settled, the players check to see if their newly placed piece. 
        in combination with any existing pieces of their same color. 
        make a straight light of four tokens. 
        If four tokens are connected in a horizontal/vertical/diagonal line, that player wins.</p>
      <p>A valid connection must have four tokens that are immediately adjacent to each other, 
        and they can be vertical, diagonal, or horizontal.</p>

    </div>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/player">Player</Link>
        </ul>
          
      </nav>
      <Route path="/" exact component={Home}></Route>
      <Route path="/player" component={Player}></Route>

      </div>
    </Router>

  );
}

export default App;
