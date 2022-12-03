let computerWinCount = 0;
let playerWinCount = 0;
let computersGo = Math.floor(Math.random() * 3);

document.querySelector(".computer-attempt-image").className = `computer-attempt-image ${computersGo}`
document.querySelector(".player-score").innerHTML = playerWinCount;
document.querySelector(".computer-score").innerHTML = computerWinCount;
let gameStatus = document.querySelector(".game-status");


console.log(computersGo);