import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SetBoard from './SetBoard.js'

function App() {

    const [playerNumber, setPlayerNumber] = useState(2);
    const [nestContent, setNestContent] = useState([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
    const [activePlayer, nextPlayer] = useState("bot");
    const [playerScore, setPlayerScore] = useState([0,0]);

  return (
    <div className="App">
      <header className="App-header">
        <SetBoard props={{playerNumber, nestContent}}/>
      </header>
    </div>
  );
}

export default App;
