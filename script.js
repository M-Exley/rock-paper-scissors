'use strict'

function getComputerChoice() {
    const res = Math.random();
    console.log(res);
    if (res > 0 && res < 0.33) {
        return 'rock'
        // console.log("Computer: Rock")
    } else if (res > 0.33 && res < 0.66) {
        return 'paper'
        // console.log("Computer: Paper")

    } else (res > 0.66 && res < 0.99) 
        return 'scissors'
        // console.log("Computer: Scissors")


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
let winner = function () {
    if (humanScore === 5) {
        return `Human has: ${humanScore}. You win.`
    } else if (computerScore === 5) {
        return `Computer has: ${computerScore}. You lose.`
    }
}

function playGame () {
    
    
    
    function playRound(computerChoice, humanChoice) {
        if        (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log("You lose: Paper beats Rock");
            computerScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log("You lose: Rock beats Scissors");
            computerScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log("You lose: Scissors beats Paper");
            computerScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'paper') {
            console.log("You win: Rock beats Paper");
            humanScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            console.log("You win: Scissors beats Rock");
            humanScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
            console.log("You win: Paper beats Scissors");
            humanScore++;    
        } else if (computerChoice === humanChoice) {
            console.log("It's a Tie!")
        } 
        
    }
    
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    
    
    while (humanScore || computerScore < 5 ) {
    playRound();    
    }
    
    
}




playGame();
console.log(computerScore);
console.log(humanScore);





