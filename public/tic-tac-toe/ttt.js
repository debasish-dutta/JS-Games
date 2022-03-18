const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = 'X';
let gameState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let score = [0, 0];

const winningMessage = () => `Player ${currentPlayer} won!!`;
const drawMessage = () => 'Game Drawed!!';
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function resultCheck() {
    let win = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === " " || b === " " || c === " ") {
            continue;
        }
        if (a === b && b === c) {
            win = true;
            break
        }
    }

    if (win) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        updateScore();
        return;
    }

    let draw = !gameState.includes(" ");
    if (draw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    playerChange();
}

function cellClick(clickedCellevent) {
    const clickedCell = clickedCellevent.target;
    const clickCellIndex = parseInt(
        clickedCell.getAttribute(`cell-index`)
    );

    if(gameState[clickCellIndex] !== " " || !gameActive) {
        return;
    }

    cellPlayed(clickedCell, clickCellIndex);
    resultCheck();
}
function cellPlayed(clickedCell, clickCellIndex) {
    gameState[clickCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    if ( currentPlayer == "X" ) { 
        document.querySelectorAll('.cell')[clickCellIndex].style.color = "blue";
    }
    else {
        document.querySelectorAll('.cell')[clickCellIndex].style.color = "red";
        }
}

function updateScore() {
    if (currentPlayer === "X") {
        score[0]++;
        console.log(score[0]);
        document.querySelector('.X-score').innerHTML = "X: " + score[0];
    }
    else if (currentPlayer === "O") {
        score[1]++;
        document.querySelector('.Y-score').innerHTML = "Y: " + score[1];
    }
}

function reset() {
    gameActive = true;
    currentPlayer = "X";
    gameState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = " ");
}

function newGame() {
    reset();
    score = [0, 0];

}
function undo() {

}


// Adding event listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelectorAll('.reset').forEach(cell => cell.addEventListener('click', reset));
document.querySelectorAll('.newGame').forEach(cell => cell.addEventListener('click', newGame));
document.querySelectorAll('.undo').forEach(cell => cell.addEventListener('click', undo));

//