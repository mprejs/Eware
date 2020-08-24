import React, {useState, useEffect} from 'react';
import './App.css';
import SetBoard from './SetBoard.js';
import passMove from './passMove';

function App() {
    const [playerNumber, setPlayerNumber] = useState(2);
    const [nestContent, setNestContent] = useState([4,4,4,4,4,4,4,4,4,4,4,4]);
    const [activePlayer, nextPlayer] = useState("botPlayer");
    const [playerScore, setPlayerScore] = useState([0,0]);
    const playerName = ["botPlayer", "topPlayer"];

    useEffect(() => {
       const player = document.querySelector(`.${activePlayer}`);
       const playerBtns = document.querySelectorAll(`.${activePlayer} .nest`);

        (playerName.indexOf(activePlayer) === 0)?(
            document.querySelector(`.${playerName[playerName.length-1]}`).classList.remove("activePlayer")
        ):(
            document.querySelector(`.${playerName[playerName.indexOf(activePlayer)-1]}`).classList.remove("activePlayer")
        );

        (playerName.indexOf(activePlayer) === 0)?(
            document.querySelectorAll(`.${playerName[playerName.length-1]} .nest`).forEach((e) => {e.disabled = true})
        ):(
            document.querySelectorAll(`.${playerName[playerName.indexOf(activePlayer)-1]} .nest`).forEach((e) => {e.disabled = true})
        );

       player.classList.add("activePlayer");
       playerBtns.forEach((e) => {e.disabled = false});

    });

    const updateScore = (nestFinalValue, playerScore, playerName, activePlayer) => {
        const tempArr = [...playerScore];
        const currentPlayerIndex = playerName.indexOf(activePlayer);
        tempArr[currentPlayerIndex] += parseInt(nestFinalValue);
        return [...tempArr]
    };

    const playerMove = (btn, i) => {
        const tempArr = [...nestContent];
        const nestOriginal = parseInt(btn.id);
        const spreadLength = tempArr[nestOriginal];
        const spreadOverflow = (a) => {return (nestOriginal + a - ( (nestOriginal + a) % tempArr.length)) / tempArr.length};
        const nestFinal = (nestOriginal + spreadLength) - (tempArr.length * spreadOverflow(spreadLength));
        const nestFinalValue = tempArr[nestFinal] +1;

        if (spreadLength === 0) {return}

        tempArr[nestOriginal]=0;

        for (let i = 1; i <= spreadLength; i++) {
            tempArr[(nestOriginal + i) - (tempArr.length * spreadOverflow(i))] += 1
        }

        if ((parseInt(nestFinalValue) === 2 || parseInt(nestFinalValue) === 3) && Math.floor(nestFinal/6) !== playerName.indexOf(activePlayer)){
            const newScore = updateScore(nestFinalValue, playerScore, playerName, activePlayer);
            setPlayerScore(newScore);
            tempArr[nestFinal]=0;
            console.log(tempArr, playerName.indexOf(activePlayer), i)
        }

        nextPlayer(()=>passMove(activePlayer, playerName, playerNumber));
        setNestContent(tempArr);
    };

    const predictMove = (btn) => {
        const tempArr = [...nestContent];
        const nestOriginal = parseInt(btn.id);
        const spreadLength = tempArr[nestOriginal];
        const spreadOverflow = (a) => {return (nestOriginal + a - ( (nestOriginal + a) % tempArr.length)) / tempArr.length};

        if (spreadLength === 0) {return}

        for (let i = 0; i <= spreadLength-1; i++) {
            document.querySelector(`.btn-${nestOriginal+i - (tempArr.length * spreadOverflow(i))}`).classList.add("nest-drop")
        }

        document.querySelector(`.btn-${nestOriginal+spreadLength - (tempArr.length * spreadOverflow(spreadLength))}`).classList.add("nest-final")
    };

    return (
    <div className="App">
        <section className="App-board">
            <SetBoard playerNumber={playerNumber} nestContent={nestContent} playerMove={playerMove} predictMove={predictMove} playerName={playerName} playerScore={playerScore}/>
        </section>
    </div>
  );
}

export default App;
