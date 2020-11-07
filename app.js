let score1 = 0;
let score2 = 0;
let goal = 5;

const scoreSelector = document.querySelector("#scoreSelector")
const upPoint1 = document.querySelector("#upPoint1")
const upPoint2 = document.querySelector("#upPoint2")
const displayScore1 = document.querySelector("#playerOneScore")
const displayScore2 = document.querySelector("#playerTwoScore")
const reset = document.querySelector("#reset")


function gameOver() {
    upPoint1.disabled = true;
    upPoint2.disabled = true;
}

scoreSelector.addEventListener("input", (e) => {
    goal = parseInt(e.target.value);
})

upPoint1.addEventListener("click", () => {
    score1++;
    displayScore1.innerHTML = score1;
    if (score1 === goal) {
        displayScore1.classList.toggle("won")
        displayScore2.classList.toggle("lost")
        gameOver();
    }
})

upPoint2.addEventListener("click", () => {
    score2++;
    displayScore2.innerHTML = score2;
    if (score2 === goal) {
        displayScore1.classList.toggle("lost")
        displayScore2.classList.toggle("won")
        gameOver();
    }
})

reset.addEventListener("click", () => {
    score1 = 0;
    score2 = 0;
    displayScore1.innerHTML = score1;
    displayScore2.innerHTML = score2;
    displayScore1.classList.remove("won")
    displayScore1.classList.remove("lost")
    displayScore2.classList.remove("won")
    displayScore2.classList.remove("lost")
    upPoint1.disabled = false;
    upPoint2.disabled = false;
})