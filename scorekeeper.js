const plr1Button = document.querySelector('#plr1Button')
const plr2Button = document.querySelector('#plr2Button')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const resetbutton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#select')

let plr1 = 0;
let plr2 = 0;
let winningScore = 5;
let isGameOver = false;
plr1Button.addEventListener('click', function () {
    if (!isGameOver) {
        plr1 += 1;
        if (plr1 === winningScore) {
            isGameOver = true;
            player1.classList.add('winner')
            player2.classList.add('looser')
        }
        player1.textContent = plr1;
    }

})
plr2Button.addEventListener('click', function () {
    if (!isGameOver) {
        plr2 += 1;
        if (plr2 === winningScore) {
            isGameOver = true;
            player2.classList.add('winner')
            player1.classList.add('looser')
        }
        player2.textContent = plr2;
    }

})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset();
})
resetbutton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    plr1 = 0;
    plr2 = 0;
    player1.classList.remove('winner', 'looser')
    player2.classList.remove('winner', 'looser')
    player1.textContent = 0;
    player2.textContent = 0
}