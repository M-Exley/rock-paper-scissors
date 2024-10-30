'use strict'

    let humanScore = 0;
    let computerScore = 0; 

const playerChoiceDiv = document.querySelector('.player');
const computerChoiceDiv = document.querySelector('.computer');
const roundOne = document.querySelector('.round-one');
const roundTwo = document.querySelector('.round-two');
const roundThree = document.querySelector('.round-three');
const roundFour = document.querySelector('.round-four');
const roundFive = document.querySelector('.round-five');
const finalResult = document.querySelector('.final-result');


function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', function(e){
            const humanResult = e.target.textContent;
            console.log(`Player: ${humanResult}`);
            const computerResult = getComputerChoice();
            console.log(checkRound(computerResult, humanResult));
            playerChoiceDiv.textContent = `Player's Choice: ${humanResult}`;
            computerChoiceDiv.textContent = `Computer's Choice: ${computerResult}`;
            let count = 0;
            count++;
            console.log(`Buttons clicked: ${count}`);
        })
    })
        
}

function getComputerChoice() {
            const res = parseInt(Math.random() * 3);
            if (res === 0) {
                console.log(`Computer: ${res} = Rock`);
                return 'Rock'
            } else if (res === 1) {
                console.log(`Computer: ${res} = Paper`);
                return 'Paper'
        
            } else if (res === 2) {
                console.log(`Computer: ${res} = Scissors`);
                return 'Scissors' }

            console.log(res);
            }
        
const checkRound =  function(computerChoice, humanChoice) {
                let resultRound = '';
                if        (computerChoice === 'Paper' && humanChoice === 'Rock') {
                    let resultRound = 'You lose';
                    computerScore++;
                    console.log(computerScore);
                    return resultRound;
             } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
            let resultRound = 'You lose';
            computerScore++;
            console.log(computerScore);
            return resultRound;
             } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
            let resultRound = 'You lose';
            computerScore++;
            console.log(computerScore);
            return resultRound;
             } else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
            let resultRound = 'You win';
            humanScore++;
            console.log(humanScore);
            return resultRound;
             } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
            let resultRound = 'You win';
            humanScore++;
            console.log(humanScore);
            return resultRound;
             } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
            let resultRound = 'You win';
            humanScore++;
            console.log(humanScore);
            return resultRound;   
             } else if (computerChoice === humanChoice) {
            let resultRound = 'It\'s a tie';
            return resultRound;
        } 
        checkScore();
        console.log(resultRound);

     
    }
        

playGame();

const checkScore = function() {
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
}