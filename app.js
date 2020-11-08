const player1 = {
    addPoint: document.querySelector("#upPoint1"),
    currentScore: 0,
    displayScore: document.querySelector("#playerOneScore"),
    roundsWon: 0
}

const player2 = {
    addPoint: document.querySelector("#upPoint2"),
    currentScore: 0,
    displayScore: document.querySelector("#playerTwoScore"),
    roundsWon: 0
}
let isGameOver = false;
let playTo = 5;
const resetButton = document.querySelector("#reset")

function pointIncrease(player, opponent) {
    if (!isGameOver) {
        player.currentScore++;
        player.displayScore.textContent = player.currentScore;
        if(player.currentScore == playTo) {
            player.displayScore.classList.toggle("won");
            opponent.displayScore.classList.toggle("lost");
            isGameOver = true;
        }
    }
}

function resetGame() {
    for (let player of [player1, player2]) {
        player.currentScore = 0;
        player.displayScore.textContent = player.currentScore;
        player.displayScore.classList.remove("won", "lost");
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