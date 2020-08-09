import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SetBoard from './SetBoard.js';
// import playerMove from './PlayerMove';

function App() {
    const [playerNumber, setPlayerNumber] = useState(2);
    const [nestContent, setNestContent] = useState([1,2,3,4,4,4,4,4,4,4,4,4]);
    const [activePlayer, nextPlayer] = useState("botPlayer");
    const [playerScore, setPlayerScore] = useState([0,0]);

    const playerMove = (btn) => {
        const tempArr = [...nestContent];
        const a = tempArr[btn.id];
            for (let i = 1; i <= a; i++) {
                if ((parseInt(btn.id) + i) >= parseInt(tempArr.length)){
                    tempArr[(parseInt(btn.id) + i - parseInt(tempArr.length))] += 1
                }
                else {
                    tempArr[parseInt(btn.id) + i] += 1
                }
            }
        tempArr[btn.id]=0;
        setNestContent(tempArr);
    };


    return (
    <div className="App">
      <header className="App-header">
        <SetBoard playerNumber={playerNumber} nestContent={nestContent} playerMove={playerMove}/>
      </header>
    </div>
  );
}

export default App;
