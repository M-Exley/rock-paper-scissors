'use strict'

function getComputerChoice() {
    const res = Math.random();
    console.log(res);
    if (res > 0 && res < 0.33) {
        return 'Rock'
    } else if (res > 0.33 && res < 0.66) {
        return 'Paper'
    } else (res > 0.66 && res < 0.99) 
        return 'Scissors'

}

function getHumanChoice() {
    let res = window.prompt("Choose Rock, Paper, or Scissors");
    const lower = res.toLowerCase();
    if (res === "rock" || res === "paper" || res === "scissors") {
        return res;
        // console.log(res);
    } else {
        window.prompt("choice not found")
    }
    

}

console.log(getComputerChoice());
getHumanChoice();

