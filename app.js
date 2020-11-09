const player1 = {
    addPoint: document.querySelector("#upPoint1"),
    currentScore: 0,
    displayScore: document.querySelector("#playerOneScore"),
    roundsWon: 0,
    name: prompt("What is Player One's name?"),
    nameLabel: document.querySelector("#playerOneName")
}

const player2 = {
    addPoint: document.querySelector("#upPoint2"),
    currentScore: 0,
    displayScore: document.querySelector("#playerTwoScore"),
    roundsWon: 0,
    name: prompt("What is Player Two's name?"),
    nameLabel: document.querySelector("#playerTwoName")
}

player1.addPoint.textContent = `+1 for ${player1.name}`;
player1.nameLabel.textContent = player1.name;
player2.addPoint.textContent = `+1 for ${player2.name}`;
player2.nameLabel.textContent = player2.name;

let isGameOver = false;
let playTo = 5;
let subtitle = document.querySelector(".subtitle")
const resetButton = document.querySelector("#reset")

function pointIncrease(player, opponent) {
    if (!isGameOver) {
        player.currentScore++;
        player.displayScore.textContent = player.currentScore;
        if(player.currentScore == playTo) {
            player.displayScore.classList.toggle("won");
            opponent.displayScore.classList.toggle("lost");
            subtitle.textContent = `${player.name} won!`;
            isGameOver = true;
        }
    }
}

const messages = [
    "Show your opponent who's boss",
    "Well, you can try again!",
    "Still not winning huh?",
    "You are persistent!",
    "I can't believe you're still playing",
    "I'm taking a break, you can keep playing"
]

let messageCounter = 1;

function resetGame() {
    if(messageCounter < 5) {
        messageCounter++;
    }
    for (let player of [player1, player2]) {
        player.currentScore = 0;
        player.displayScore.textContent = player.currentScore;
        player.displayScore.classList.remove("won", "lost");
        subtitle.textContent = messages[messageCounter]
        isGameOver = false;
    }
}

player1.addPoint.addEventListener("click", () => {
    pointIncrease(player1, player2);
})

player2.addPoint.addEventListener("click", () => {
    pointIncrease(player2, player1);
})

scoreSelector.addEventListener("input", (e) => {
    playTo = parseInt(e.target.value);
    resetGame();
})

resetButton.addEventListener("click", () => {
    resetGame();
})