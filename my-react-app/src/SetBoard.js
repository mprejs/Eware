import React, {useState, useEffect} from 'react';

const SetBoard = ({playerNumber, nestContent}) => {

    const board = [];

    for (let i=1; i<=props.playerNumber; i++){
        board.push(
            <section className={`bot`} key={i}>
            gracz 1
            {/*{for (let j=1; j<=8; j++){*/}
            {/*    <button className={`nest btn-${j}`}>nestContent[j+1]</button>*/}
            {/*}}*/}
        </section>)}

    return (
        <>
           {board}
        </>
    )
};

export default SetBoard;