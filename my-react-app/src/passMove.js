import React from 'react';

const passMove = (activePlayer, playerName, playerNumber) => {
    const tempArr = [...playerName];
    const element = document.querySelector(`.${activePlayer}`);



    if (tempArr.indexOf(activePlayer) === (tempArr.length -1)){
        return tempArr[0]
    }
    return tempArr[tempArr.indexOf(activePlayer) +1]
};


export default passMove;