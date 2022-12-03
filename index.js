let computerWinCount = 0;
let playerWinCount = 0;
let computersGo = Math.floor(Math.random() * 3);

const computerChoices = document.getElementsByClassName("computer-attempt-image");
for (let i = 0; i < computerChoices.length; i++) {
    computerChoices[i].style.display = "none";
}

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
// document.querySelector(".computer-attempt-image").className = `computer-attempt-image ${computersGo}`
// computerChoice.style.display = "block"

document.querySelector(".player-score").innerHTML = playerWinCount;
document.querySelector(".computer-score").innerHTML = computerWinCount;
let gameStatus = document.querySelector(".game-status");

console.log(computersGo);