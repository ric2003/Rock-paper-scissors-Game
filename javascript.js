const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;
let gameOver = false;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function setHumanChoice(choice) {
    if(gameOver){
        return
    }
    if (round < 5) {
        playRound(choice, getComputerChoice());
        round++;
    }
    if (round === 5) {
        displayFinalResult();
    }
}

function playRound(humanChoice, computerChoice) {
    if(gameOver){
        return
    }
    let result = "";
    if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function displayFinalResult() {
    let finalResult = "";
    if (humanScore > computerScore) {
        finalResult = "You win the game!!!";
    } else if (humanScore < computerScore) {
        finalResult = "You lost the game :(";
    } else {
        finalResult = "The game is a tie!";
    }
    gameOver = true;
    showAlert(finalResult);
    round = 0; 
    humanScore = 0;
    computerScore = 0;
    
}

function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'flex';
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("result").innerText = "";
    gameOver = false;
}

window.onload = function() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById('current-date').innerText = year;
}
