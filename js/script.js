function getComputerChoice() {
    let computerChoice = '';
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }
    
    return computerChoice 
}
const playRound = (playerSelection) => {
    
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'Rock':
                return 'Draw!';
                break;
            case 'Paper':
                return 'You Lose!';
                break;
            case 'Scissors':
                return 'You Win!';
                break;
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                return 'You Win!';
                break;
            case 'Paper':
                return 'Draw!';
                break;
            case 'Scissors':
                return 'You Lose!';
                break;
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                return 'You Lose!';
                break;
            case 'Paper':
                return 'You Win!';
                break;
            case 'Scissors':
                return 'Draw!';
                break;
        }
    } else {
        return 'Please choose "Rock", "Paper", or "Scissors"'
    }
}
let computerSelection = getComputerChoice();
//let playerSelection = prompt('Rock, Paper, Scissors!', 'Rock').toLowerCase();
//console.log(playRound(playerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++) {
        playerSelection = prompt(`Game ${i} of Rock, Paper, Scissors!`, getComputerChoice()).toLowerCase()
        
        if (playRound(playerSelection) === 'You Lose!') computerScore++
        if (playRound(playerSelection) === 'You Win!') playerScore++
        
    }

    if (playerScore > computerScore) {
        return 'You Win'
    } else if (playerScore < computerScore) {
        return 'You Lose'
    } else {
        return 'Its a Draw'
    }

}
console.log(game());
