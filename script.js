'use strict'

function playGame () {
    
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
    const res = Math.random();
    // console.log(res);
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
    // // let res = window.prompt("Choose Rock, Paper, or Scissors");
    // const lower = res.toLowerCase();
    // // console.log(res);
    // if (res === "rock" || res === "paper" || res === "scissors") {
    //     return res;
    // } else {
    //     window.prompt("choice not found")
    // }
    }



  
    function playRound(computerChoice, humanChoice) {
        if        (computerChoice === 'paper' && humanChoice === 'rock') {
            return 'computer';
            // console.log("You lose: Paper beats Rock");
            // computerScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            return 'computer';
            // console.log("You lose: Rock beats Scissors");
            // computerScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            return 'computer';            
            // console.log("You lose: Scissors beats Paper");
            // computerScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'paper') {
            return 'human';
            // console.log("You win: Rock beats Paper");
            // humanScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            return 'human';
            // console.log("You win: Scissors beats Rock");
            // humanScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
            return 'human';
            // console.log("You win: Paper beats Scissors");
            // humanScore++;    
        } else if (computerChoice === humanChoice) {
            console.log("It's a Tie!");
            return 'tie';
        } 
        
        }
        
        // while (humanScore < 5 && computerScore < 5) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            let result = playRound(computerSelection, humanSelection);
            
                

        // if (result === 'human') {
        //     humanScore++;
        //     console.log(`You win this round! Human: ${humanSelection}, Computer: ${computerSelection}`);
        // } else if (result === 'computer') {
        //     computerScore++;
        //     console.log(`Computer wins this round! Human: ${humanSelection}, Computer: ${computerSelection}`);
        // } else {
        //     console.log(`Tie round! Human: ${humanSelection}, Computer: ${computerSelection}`);
        // }
        // console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    
        // }

        // if (humanScore === 5) {
        //     console.log("Congratulations! You won the game!");
        // } else {
        //     console.log("Computer wins the game! Better luck next time.");
        // }

        const buttons = document.querySelectorAll("button");
        console.log(buttons);    

        buttons.forEach((button) => {
            button.addEventListener('click', function(e) {
                
            let humanChoice = e.target.textContent;
            playRound(humanSelection, computerSelection)
            })
            console.log(humanSelection)
        })
    }
    
playGame();
    





