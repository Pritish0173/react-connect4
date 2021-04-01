
import './App.css';
import Game from './Game';
import React, { useState } from 'react';

function Player() {

    return (
      <div className="App">

        <Search />
      </div>
    );
  
}

const Search = () => {
  const [show, setShow] = useState(false)
  const onClick = () => setShow(true)

  const [player1name, changep1Name] = useState("");
  const [player2name, changep2Name] = useState("");

  return (
    <div>
      <label>Player 1 Name:</label>
      <input type="text" onChange={e => changep1Name(e.target.value)}></input>
      <label>Player 1 Name:</label>
      <input type="text" onChange={e => changep2Name(e.target.value)}></input>
      <input type="submit" value="Search" onClick={onClick} />
      { show ? <Game p1name={player1name} p2name={player2name}/> : null }
    </div>
  )
}


export default Player;