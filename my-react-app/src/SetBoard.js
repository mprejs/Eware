import React from 'react';

const clearGlow = () => {
    const btnsList = document.querySelectorAll(".nest");
    btnsList.forEach(e => e.classList.remove("nest-drop", "nest-final"));
    console.log("już nie świecę")
};

const SetNests = ({nestContent, i, playerMove, predictMove}) => {

    const nests = [];

    if (i === 1) {
        for (let j=5; j>=0; j--){
            nests.push(<button
                className={`nest btn-${i*6+j}`}
                key={i*6+j}
                id={i*6+j}
                onClick={(e) => playerMove(e.target)}
                onMouseDown={e => predictMove(e.target)}
                onMouseUp={() =>clearGlow()}

            >
                {nestContent[i*6+j]}
                <strong>{i*6+j}</strong>
            </button>)}


        return (<>{nests}</>)
    }

    for (let j=0; j<6; j++){
        nests.push(<button
            className={`nest btn-${i*6+j}`}
            key={i*6+j}
            id={i*6+j}
            onClick={(e) => playerMove(e.target)}
            onMouseDown={e => predictMove(e.target)}
            onMouseUp={() =>clearGlow()}
        >
            {nestContent[i*6+j]}
            <strong>{i*6+j}</strong>
        </button>)}

    return (<>{nests}</>)
};

const SetBoard = ({playerNumber, nestContent, playerMove, predictMove, playerName}) => {

    const board = [];

    for (let i=0; i<playerNumber; i++){
        board.push(
            <section className={playerName[i] } key={i}>
            <SetNests nestContent={nestContent} playerMove={playerMove} i={i} predictMove={predictMove}/>
            </section>)}

    return (
        <>
           {board}
        </>
    )
};

export default SetBoard;