let score = 0;
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");

function moveTarget() {
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

moveTarget();
