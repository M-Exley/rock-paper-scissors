'use strict'

function getComputerChoice() {
    const res = Math.random();
    console.log(res);
    if (res > 0 && res < 0.33) {
        return 'rock'
    } else if (res > 0.33 && res < 0.66) {
        return 'paper'
    } else (res > 0.66 && res < 0.99) 
        return 'scissors'

}

function getHumanChoice() {
    let res = window.prompt("Choose Rock, Paper, or Scissors");
    const lower = res.toLowerCase();
    console.log(res);
    if (res === "rock" || res === "paper" || res === "scissors") {
        return res;
    } else {
        window.prompt("choice not found")
    }
    

}


let humanScore = 0;
let computerScore = 0;

function playGame () {
    
    
    function playRound(computerChoice, humanChoice) {
        if        (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log("You lose");
            computerScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log("You lose");
            computerScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log("You lose");
            computerScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'paper') {
            console.log("You win");
            humanScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            console.log("You win");
            humanScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
            console.log("You win");
            humanScore++;    
        } else if (computerChoice === humanChoice) {
            console.log("equal")
        }
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    
   if (humanScore || computerScore < 5) {
    playRound(computerSelection, humanSelection);
    }
     
    
}

playGame();
console.log(computerScore);
console.log(humanScore);



