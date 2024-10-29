'use strict'

let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let computerChoice = '';


function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', function(e){
         const humanResult = e.target.textContent;
         console.log(humanResult);
            getComputerChoice();
            
    const checkRound =  function(computerChoice, humanChoice) {
                let resultRound = '';
                if        (computerChoice === 'Paper' && humanChoice === 'Rock') {
                    let resultRound = 'lose';
                    return resultRound;
        } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
            let resultRound = 'lose';
            return resultRound;
        } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
            let resultRound = 'lose';
            return resultRound;
        } else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
            let resultRound = 'win';
            return resultRound;
        } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
            let resultRound = 'win';
            return resultRound;
        } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
            let resultRound = 'win';
            return resultRound;   
        } else if (computerChoice === humanChoice) {
            let resultRound = 'tie';
            return resultRound;
        } 
        return resultRound;
    }
    // checkRound();
    })
    })
        
}
    
   


        
        // while (humanScore < 5 && computerScore < 5) {   
                
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

        function getComputerChoice() {
            const res = Math.random();
            console.log(res);
            if (res > 0 && res < 0.33) {
                return 'Rock'
                // console.log("Computer: Rock")
            } else if (res > 0.33 && res < 0.66) {
                return 'Paper'
                // console.log("Computer: Paper")
        
            } else (res > 0.66 && res < 0.99) 
                return 'Scissors'
                // console.log("Computer: Scissors")
            }
        
        
        





playGame();