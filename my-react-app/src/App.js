import React, {useState, useEffect} from 'react';
import './App.css';
import SetBoard from './SetBoard.js';
import passMove from './passMove';
import bouncingBall from "./BouncingBallv2";
import {NavLink} from "react-router-dom";

function App({menuItems}) {
    const [playerNumber, setPlayerNumber] = useState(2);
    const [nestContent, setNestContent] = useState([4,4,4,4,4,4,4,4,4,4,4,4]);
    const [activePlayer, nextPlayer] = useState("botPlayer");
    const [playerScore, setPlayerScore] = useState([0,0]);
    const playerName = ["botPlayer", "topPlayer"];
    const menuItemsArr = [...menuItems];
    let tempScore = 0;

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


    useEffect(() =>{
        const canvass = document.querySelectorAll('.canvas');
        const scoreboardCanvass = document.querySelectorAll('.scoreboardCanvas');

        bouncingBall(canvass, nestContent);
        bouncingBall(scoreboardCanvass, playerScore);
    });

    const winner = () => {
        if (playerName.indexOf(activePlayer) === 0  ){
            return playerName[playerName.length - 1]
        }
        return playerName[playerName.indexOf(activePlayer)-1]
    };

    const updateScore = (addedPoints, playerScore, playerName, activePlayer) => {
        const tempArr = [...playerScore];
        const currentPlayerIndex = playerName.indexOf(activePlayer);
        tempArr[currentPlayerIndex] += parseInt(addedPoints);
        if (tempArr.some(x => x > 24)){document.querySelector('.winnerBoard').classList.add('winnerBoardVisible')}
        return [...tempArr]
    };

    const scoring = (a, tempArr) => {
        if ((parseInt(tempArr[a]) === 2 || parseInt(tempArr[a]) === 3) && Math.floor(a/6) !== playerName.indexOf(activePlayer)){
            tempScore += tempArr[a];
            tempArr[a]=0;
            scoring((a-1), tempArr);
        }

        const newScore = updateScore(tempScore, playerScore, playerName, activePlayer);
        setPlayerScore(newScore);
    };

    const NextPlayerBoard = (tempArr, nestOriginal, nestFinal) => {
        const tempArr1 = [...tempArr];
        const spreadLength1 = tempArr1[nestOriginal];

        const isZero = (currentValue) => currentValue === 0;
        const nullify = (a, tempArr1) => {
            if ((parseInt(tempArr1[a]) === 2 || parseInt(tempArr1[a]) === 3) && Math.floor(a/6) !== playerName.indexOf(activePlayer)){
                tempArr1[a]=0;
                nullify((a-1), tempArr1);
            }
        };
        tempArr1.splice(nestOriginal, 1);

        for (let i = 0; i < spreadLength1; i++) {
            tempArr1[(nestOriginal + i) - (tempArr1.length * ((nestOriginal + i - ((nestOriginal + i) % tempArr1.length)) / tempArr1.length))] += 1
        }
        tempArr1.splice((nestOriginal), 0, 0);

        nullify(nestFinal,tempArr1);

        if (playerName.indexOf(activePlayer) === (playerName.length-1)) {
            return tempArr1.slice(0, 6).every(isZero)
        }

        return tempArr1.slice((6 *(playerName.indexOf(activePlayer)+1)), (6 *(playerName.indexOf(activePlayer)+1))+6).every(isZero)
    };

    const playerMove = (btn) => {
        const tempArr = [...nestContent];
        const nestOriginal = parseInt(btn.id);
        const spreadLength = tempArr[nestOriginal];
        const spreadOverflow = (a) => {return (nestOriginal + a - ((nestOriginal + a) % tempArr.length)) / tempArr.length};
        const nestFinal = (nestOriginal + spreadLength) - (tempArr.length * spreadOverflow(spreadLength));
        const nestFinalValue = tempArr[nestFinal] +1;


        // can't choose an empty nest
        if (spreadLength === 0) {return}

        // can't make a move, that prevents opponent from making a move
        if (NextPlayerBoard(tempArr, nestOriginal, nestFinal)) {return}

        tempArr.splice(nestOriginal, 1);

        for (let i = 0; i < spreadLength; i++) {
            tempArr[(nestOriginal + i) - (tempArr.length * spreadOverflow(i))] += 1
        }
        tempArr.splice((nestOriginal), 0, 0);

        scoring(nestFinal,tempArr);
        tempScore = 0;


        setNestContent(tempArr);
        nextPlayer(()=>passMove(activePlayer, playerName, playerNumber));
    };

    const predictMove = (btn) => {
        const tempArr = [...nestContent];
        const nestOriginal = parseInt(btn.id);
        const spreadLength = tempArr[nestOriginal];
        const spreadOverflow = (a) => {return (nestOriginal + a - ( (nestOriginal + a) % tempArr.length)) / tempArr.length};

        if (spreadLength === 0) {return}

        if (btn.disabled) {return}

        for (let i = 0; i <= spreadLength-1; i++) {
            setTimeout (() => {(document.querySelector(`.btn-${nestOriginal+i - (tempArr.length * spreadOverflow(i))}`).classList.add("nest-drop"))}, i*100)
        }

        setTimeout (() => {(document.querySelector(`.btn-${nestOriginal+spreadLength - (tempArr.length * spreadOverflow(spreadLength))}`).classList.add("nest-final"))}, spreadLength * 100)
    };

    return (
    <div className="App">
        <section className="App-board">
            <div
                className="winnerBoard">
                <p className="winnerMessage">
                    Congratulations! Player {winner()} wins!
                </p>
                <ul className="winnerBoardMenu">
                    {menuItemsArr.map(item => (
                        <li key={item.link}>
                            <NavLink
                                exact={item.link === "/"}
                                to={item.link}
                                className="menu-link"
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <SetBoard playerNumber={playerNumber} nestContent={nestContent} playerMove={playerMove} predictMove={predictMove} playerName={playerName} playerScore={playerScore}/>
        </section>
    </div>
  );
}

export default App;
