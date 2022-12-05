let computerWinCount = 0;
let playerWinCount = 0;
let computersGo = Math.floor(Math.random() * 3);

//Update compter image cards to display none.
const computerChoices = document.getElementsByClassName("computer-attempt-image");
for (let i = 0; i < computerChoices.length; i++) {
    computerChoices[i].style.display = "none";
}

//Uses math random to display correct image and remove the filler div
function changeComputerImg() {
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

//Update player cards to display none
const playerCards = document.getElementsByClassName("player-attempt-image");
for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].style.display = "none";
}

//Event listeners for player choice
const playerChoiceButtons = document.getElementsByClassName("button");
for (let i = 0; i < playerChoiceButtons.length; i++) {
    playerChoiceButtons[i].addEventListener("click", () => {
        if (playerChoiceButtons[i].className === "rock button") {
            document.querySelector(".player-rock").style.display = "block";
            document.querySelector(".spacer").style.display = "none";
            changeComputerImg()
        } else if (playerChoiceButtons[i].className === "paper button") {
            document.querySelector(".player-paper").style.display = "block";
            document.querySelector(".spacer").style.display = "none";
            changeComputerImg()
        } else if (playerChoiceButtons[i].className === "scissors button rotate") {
            document.querySelector(".player-scissors").style.display = "block";
            document.querySelector(".spacer").style.display = "none";
            changeComputerImg()
        }
    })
}

//Event target 

//Update score counters
document.querySelector(".player-score").innerHTML = playerWinCount;
document.querySelector(".computer-score").innerHTML = computerWinCount;

//Will become winner announcement
let gameStatus = document.querySelector(".game-status");

console.log(computersGo);