let computerWinCount = 0;
let playerWinCount = 0;
let computersGo = Math.floor(Math.random() * 3);

//Update compter image cards to display none.
const computerChoices = document.getElementsByClassName("computer-attempt-image");
for (let i = 0; i < computerChoices.length; i++) {
    computerChoices[i].style.display = "none";
}

//Uses math random to display correct image and remove the filler div
function changePcImg() {
    if (computersGo === 0) {
        document.querySelector(".rock").style.display = "block"
        document.querySelector(".filler").style.display = "none"
    } else if (computersGo === 1) {
        document.querySelector(".paper").style.display = "block"
        document.querySelector(".filler").style.display = "none"
    } else if (computersGo === 2) {
        document.querySelector(".scissors").style.display = "block"
        document.querySelector(".filler").style.display = "none"
    }
}
setTimeout(changePcImg, 2000)

//Event listeners for player choice
const playerChoiceCards = document.getElementsByClassName("button");
for (let i = 0; i < playerChoiceCards.length; i++) {
    playerChoiceCards[i].addEventListener("click", () => {
        console.log(playerChoiceCards[i].className);
    })
}

//Update score counters
document.querySelector(".player-score").innerHTML = playerWinCount;
document.querySelector(".computer-score").innerHTML = computerWinCount;

//Will become winner announcement
let gameStatus = document.querySelector(".game-status");

console.log(computersGo);