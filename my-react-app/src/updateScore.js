import React from "react"

const updateScore = (nestFinalValue, playerScore, playerName, activePlayer) => {
    const tempArr = [...playerScore];
    const currentPlayerIndex = playerName.indexOf(activePlayer);
    tempArr[currentPlayerIndex] += parseInt(nestFinalValue);
    console.log(tempArr);
    return [...tempArr]
};

export default updateScore;