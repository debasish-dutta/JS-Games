let gameActive = true;
let score = [0, 0];
let userScore = document.querySelector("user-score"); 
let aiScore = document.querySelector("ai-score");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

function aiChoices() {
    choices = ["rock", "paper", "scissors", "lizard", "spock"];
    rn = Math.floor(Math.random() * choices.length);
    return choices[rn];
}

function gameLogic(userChoice) {
    var aiChoice = aiChoices();
    switch (userChoice + '-' + aiChoice) {
        case "rock-scissors":
            win('rc');
            break;
        case "rock-lizard":
            win('rl');
            break;
        case "paper-rock":
            win('pr');
            break;
        case "paper-spock":
            win('ps');
            break;
        case "scissors-paper":
            win('sp');
            break;
        case "scissors-lizard":
            win('sl');
            break;
        case "lizard-paper":
            win('lp');
            break;
        case "lizard-spock":
            win('lsp');
            break;
        case "spock-rock":
            win('spr');
            break;
        case "spock-scissors":
            win('sps');
            break;
        case "rock-paper":
            lose('rp');
            break;
        case "rock-spock":
            lose('rsp');
            break;
        case "paper-scissors":
            lose('ps');
            break;
        case "paper-lizard":
            lose('pl');
            break;
        case "scissors-rock":
            lose('sr');
            break;
        case "scissors-spock":
            lose('ssp');
            break;
        case "lizard-rock":
            lose('lr');
            break;
        case "lizard-scissors":
            lose('ls');
            break;
        case "spock-paper":
            lose('spp');
            break;
        case "spock-lizard":
            lose('spl');
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
        case "lizard-lizard":
        case "spock-spock":
            draw(userChoice, aiChoice);
            break;
    }
}

function win(r) {
    score[0]++;
    displayScore('w');
    msgBox('w');
    switch(r) {
        case "sp":
            document.querySelector('.win-msg').innerHTML = "Scissors cuts paper. You Win!! 🔥";
        break;
        case "pr":
            document.querySelector('.win-msg').innerHTML = "paper covers rock. You Win!! 🔥";
        break;
        case "rl":
            document.querySelector('.win-msg').innerHTML = "rock crushes lizard. You Win!! 🔥";
        break;
        case "lsp":
            document.querySelector('.win-msg').innerHTML = "lizard poisons Spock. You Win!! 🔥";
        break;
        case "ssp":
            document.querySelector('.win-msg').innerHTML = "Spock smashes scissors. You Win!! 🔥";
        break;
        case "sl":
            document.querySelector('.win-msg').innerHTML = "scissors decapitates lizard. You Win!! 🔥";
        break;
        case "lp":
            document.querySelector('.win-msg').innerHTML = "lizard eats paper. You Win!! 🔥";
        break;
        case "psp":
            cdocument.querySelector('.win-msg').innerHTML = "paper disproves Spock. You Win!! 🔥";
        break;
        case "spr":
            document.querySelector('.win-msg').innerHTML = "Spock vaporizes rock. You Win!! 🔥";
        break;
        case "rs":
            document.querySelector('.win-msg').innerHTML = "rock crushes scissors. You Win!! 🔥";
        break;
    }
}
function lose(r) {
    score[1]++;
    displayScore('l');
    msgBox('l');
    switch(r) {
        case "ps":
            document.querySelector('.win-msg').innerHTML = "scissors cuts paper. You Lose 💩";
            break;
        case "rp":
            document.querySelector('.win-msg').innerHTML = "paper covers rock. You Lose 💩";
            break;
        case "lr":
            document.querySelector('.win-msg').innerHTML = "rock crushes lizard. You Lose 💩";
            break;
        case "spl":
            cdocument.querySelector('.win-msg').innerHTML = "lizard poisons Spock. You Lose 💩";
            break;
        case "ssp":
            document.querySelector('.win-msg').innerHTML = "Spock smashes scissors. You Lose 💩";
            break;
        case "ls":
            document.querySelector('.win-msg').innerHTML = "scissors decapitates lizard. You Lose 💩";
            break;
        case "pl":
            document.querySelector('.win-msg').innerHTML = "lizard eats paper. You Lose 💩";
            break;
        case "spp":
            document.querySelector('.win-msg').innerHTML = "paper disproves Spock. You Lose 💩";
            break;
        case "rsp":
            cdocument.querySelector('.win-msg').innerHTML = "Spock vaporizes rock. You Lose 💩";
            break;
        case "sr":
            cdocument.querySelector('.win-msg').innerHTML = "rock crushes scissors. You Lose 💩";
            break;
    }

}
function draw(user, ai) {
    document.querySelector('.win-msg').innerHTML = `${user} equals ${ai} 🚀`;
    msgBox('d');
}

function displayScore(X) {
    if('w') {
        document.querySelector('.user-score').innerHTML = "YOU: " + score[0];
    }
    if('l') {
        document.querySelector('.ai-score').innerHTML = "AI: " + score[1];
    }
}
function msgBox(X) {
    if('w') {
        document.querySelector('.game-status').innerHTML = "WIN 🔥";
    }
    else if('l') {
        document.querySelector('.game-status').innerHTML = "LOSE 💩";
    }
    else if('d') {
        document.querySelector('.game-status').innerHTML = "DRAW 🚀";
    }
}

function newGame() {
    score = [0, 0];
    document.querySelector('.game-status').innerHTML = "";
    document.querySelector('.win-msg').innerHTML = "PLAY!!";
}
function main() {
    rock.addEventListener('click', function() {
        gameLogic("rock");
    });

    paper.addEventListener('click', function() {
        gameLogic("paper");
    });

    scissors.addEventListener('click', function() {
        gameLogic("scissors");
    });

    lizard.addEventListener('click', function() {
        gameLogic("lizard");
    });

    spock.addEventListener('click', function() {
        gameLogic("spock");
    });

    document.querySelector('.newGame').addEventListener('click', function() {
        newGame();
    }) 
}


main();