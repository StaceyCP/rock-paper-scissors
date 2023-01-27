// Display elements
const gameReloadButton = document.querySelector(".reload-game")
const filler = document.querySelector(".filler");
const spacer = document.querySelector(".spacer");
const gameStatus = document.querySelector(".game-status");

// Computer elements
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerChoices = document.getElementsByClassName("computer-attempt-image");
const computerScore = document.querySelector(".computer-score");

// Player elements
const playerRock = document.querySelector(".player-rock");
const playerPaper = document.querySelector(".player-paper");
const playerScissors = document.querySelector(".player-scissors");
const playerCards = document.getElementsByClassName("player-attempt-image");
const playerScore = document.querySelector(".player-score");
const playerChoiceButtons = document.getElementsByClassName("button");

//Update compter image cards to display none.
function hideComputerCards() {for (let i = 0; i < computerChoices.length; i++) {
    computerChoices[i].style.display = "none";
}};
hideComputerCards();

//Uses math random to display correct image and remove the filler div
function changeComputerImg() {
    const computersGo = Math.floor(Math.random() * 3);
    if (computersGo === 0) {
        rock.style.display = "block"
        filler.style.display = "none"
    } else if (computersGo === 1) {
        paper.style.display = "block"
        filler.style.display = "none"
    } else if (computersGo === 2) {
        scissors.style.display = "block"
        filler.style.display = "none"
    }
}

//Update player cards to display none
function hidePlayerCards () {for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].style.display = "none";
}};
hidePlayerCards();

 
// win counts
let computerWinCount = 0;
let playerWinCount = 0;

gameReloadButton.style.display = "none";

function winner() {
    if (playerRock.style.display === "block" && scissors.style.display === "block") {
        playerWinCount ++;
        playerScore.innerText = playerWinCount;
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "You win";
    } else if (playerRock.style.display === "block" && paper.style.display === "block") {
        computerWinCount ++;
        computerScore.innerText = computerWinCount;
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "You Lose";
    } else if (playerPaper.style.display === "block" && scissors.style.display === "block") {
        computerWinCount ++;
        computerScore.innerText = computerWinCount;
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "You Lose";
    } else if (playerPaper.style.display === "block" && rock.style.display === "block") {
        playerWinCount ++;
        playerScore.innerText = playerWinCount;
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "You win";
    } else if (playerScissors.style.display === "block" && paper.style.display === "block") {
        playerWinCount ++;
        playerScore.innerText = playerWinCount;
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "You win";
    } else if (playerScissors.style.display === "block" && rock.style.display === "block") {
        computerWinCount ++;
        computerScore.innerHTML = computerWinCount;
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "You Lose";
    } else { 
        gameReloadButton.style.display = "block";
        return gameStatus.innerText = "It's a draw";
    }
}

//Event listeners for player choice
for (let i = 0; i < playerChoiceButtons.length; i++) {
    playerChoiceButtons[i].addEventListener("click", () => {
        if (playerChoiceButtons[i].className === "rock button") {
            playerRock.style.display = "block";
            spacer.style.display = "none";
            changeComputerImg();
            winner();
        } else if (playerChoiceButtons[i].className === "paper button") {
            playerPaper.style.display = "block";
            spacer.style.display = "none";
            changeComputerImg();
            winner();
        } else if (playerChoiceButtons[i].className === "scissors button rotate") {
            playerScissors.style.display = "block";
            spacer.style.display = "none";
            changeComputerImg();
            winner();
        }
    })
}

//Reset game field

gameReloadButton.addEventListener("click", () => {
    hideComputerCards();
    filler.style.display = "block";
    hidePlayerCards();
    spacer.style.display = "block";
    gameStatus.innerText = "Shoot";
    gameReloadButton.style.display = "none";
})
