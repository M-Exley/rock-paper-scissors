'use strict'

    let humanScore = 0;
    let computerScore = 0; 
    let count = 0;


const playerChoiceDiv = document.querySelector('.player');
const computerChoiceDiv = document.querySelector('.computer');
const humanScoreUi = document.querySelector('.human-score-ui');
const computerScoreUi = document.querySelector('.computer-score-ui');
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
            humanScoreUi.textContent = `Player Score: ${humanScore}`;
            computerScoreUi.textContent = `Computer Score: ${computerScore}`;
            count += 1;
            console.log(`Buttons clicked: ${count}`);
            keepTrackGame();
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
        
            let resultRound = '';
const checkRound =  function(computerChoice, humanChoice) {
            if      (computerChoice === 'Paper' && humanChoice === 'Rock') {
                    let resultRound = 'You lose round';
                    computerScore++;
                    console.log(computerScore);
            return resultRound;
             } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
            let resultRound = 'You lose round';
            computerScore++;
            console.log(computerScore);
            return resultRound;
             } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
            let resultRound = 'You lose round';
            computerScore++;
            console.log(computerScore);
            return resultRound;
             } else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
            let resultRound = 'You win round';
            humanScore++;
            console.log(humanScore);
            return resultRound;
             } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
            let resultRound = 'You win round';
            humanScore++;
            console.log(humanScore);
            return resultRound;
             } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
            let resultRound = 'You win round';
            humanScore++;
            console.log(humanScore);
            return resultRound;   
             } else if (computerChoice === humanChoice) {
            let resultRound = 'It\'s a tie';
            return resultRound;
        } 
        // checkScore();
        console.log(resultRound);

     
    }
        

playGame();

const author = document.querySelector('.author');
const keepTrackGame = function() {
    if ((humanScore === 3) || (computerScore === 3)) {
        finalResult.textContent = `Final Result: The winner is: ${humanScore === 3 ? "Player" : "Computer"}`;
        finalResult.style.color = "red";
        !count;
        timer();
        author.style.display = 'block';
    
    }
  
}

const timer = function () {
    if (finalResult.style.colour = "red") {
        setTimeout(() => {
            humanScore = 0;

            computerScore = 0;
            playerChoiceDiv.textContent = `Player's Choice: `;
            computerChoiceDiv.textContent = `Computer's Choice: `;
            humanScoreUi.textContent = `Player Score: `;
            computerScoreUi.textContent = `Computer Score: `;
            finalResult.textContent = '';
            count = 0;
            author.style.display = 'none';
        }, 1700);
    }
}