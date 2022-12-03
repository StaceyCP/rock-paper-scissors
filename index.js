// rps === rock paper scissors
const rpsLookup = {
    rock: 0,
    paper: 1,
    scissors: 2
}


let computerWinCount = 0;
let playerWinCount = 0;
let computersGo = Math.floor(Math.random() * 3);

document.querySelector(".player-score").innerHTML = playerWinCount;
document.querySelector(".computer-score").innerHTML = computerWinCount;
let gameStatus = document.querySelector(".game-status");


console.log(computersGo);