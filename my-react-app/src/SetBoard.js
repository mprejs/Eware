import React from 'react';


const playerName = ["botPlayer", "topPlayer", "rightPlayer", "leftPlayer"];

const SetNests = ({nestContent, i, playerMove}) => {

    const nests = [];

    if (i === 1) {
        for (let j=5; j>=0; j--){
            nests.push(<button
                className={`nest btn-${j}`}
                key={i*6+j}
                id={i*6+j}
                onClick={(e) => playerMove(e.target)}>
                {nestContent[i*6+j]} <strong>{i*6+j}</strong>
            </button>)}


        return (<>{nests}</>)
    }

    for (let j=0; j<6; j++){
        nests.push(<button
            className={`nest btn-${j}`}
            key={i*6+j}
            id={i*6+j}
            onClick={(e) => playerMove(e.target)}>
            {nestContent[i*6+j]} <strong>{i*6+j}</strong>
        </button>)}

    return (<>{nests}</>)
};

const SetBoard = ({playerNumber, nestContent, playerMove}) => {

    const board = [];

    for (let i=0; i<playerNumber; i++){
        board.push(
            <section className={playerName[i]} key={i}>
            <SetNests nestContent={nestContent} playerMove={playerMove} i={i}/>
            </section>)}

    return (
        <>
           {board}
        </>
    )
};

export default SetBoard;