import React from 'react';
import {NavLink} from "react-router-dom";

const clearGlow = () => {
    clearTimeout();
    const btnsList = document.querySelectorAll(".nest");
    btnsList.forEach(e => e.classList.remove("nest-drop", "nest-final"));
};

const SetNests = ({nestContent, i, playerMove, predictMove, playerName, playerScore}) => {

    const nests = [];

    nests.push(<div className={`${playerName[i]}Scoreboard scoreboard`}>
        <div className="text">{playerName[i]}: {playerScore[i]} points</div>
        <div
            className='scoreboardCanvas'
            key={i}
            id={i}/>
    </div>);

    if (i === 1) {
        for (let j=5; j>=0; j--){
            nests.push(<button
                className={`nest btn-${i*6+j}`}
                key={i*6+j}
                id={i*6+j}
                onClick={(e) => playerMove(e.target, {i})}
                onMouseEnter={e => predictMove(e.target)}
                onMouseLeave={() =>clearGlow()}
                onMouseUp={() =>clearGlow()}
            >
                <div
                    className='canvas'
                    key={i*6+j}
                    id={i*6+j}/>
                <div className="text">{nestContent[i*6+j]}</div>
            </button>)}


        return (<>{nests}</>)
    }

    for (let j=0; j<6; j++){
        nests.push(<button
            className={`nest btn-${i*6+j}`}
            key={i*6+j}
            id={i*6+j}
            onClick={(e) => playerMove(e.target, {i})}
            onMouseEnter={e => predictMove(e.target)}
            onMouseLeave={() =>clearGlow()}
            onMouseUp={() =>clearGlow()}
        >
            <div
                className='canvas'
                key={i*6+j}
                id={i*6+j}/>
            <div className="text">{nestContent[i*6+j]}</div>
        </button>)}

    return (<>{nests}</>)
};

const SetBoard = ({playerNumber, nestContent, playerMove, predictMove, playerName, playerScore}) => {

    const board = [];

    for (let i=0; i<playerNumber; i++){
        board.push(
            <section className={playerName[i]} key={i}>
            <SetNests nestContent={nestContent} playerMove={playerMove} i={i} predictMove={predictMove} playerName={playerName} playerScore={playerScore}/>
            </section>)}

    return (
        <>
            {board}
        </>
    )
};

export default SetBoard;