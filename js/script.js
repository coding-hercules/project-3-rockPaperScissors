function getComputerChoice() {
    let computerChoice = '';
    switch (Math.floor(Math.random() * 2)) {
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
const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 'Draw!';
                break;
            case 'paper':
                return 'You Lose!';
                break;
            case 'scissors':
                return 'You Win!';
                break;
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                return 'You Win!';
                break;
            case 'paper':
                return 'Draw!';
                break;
            case 'scissors':
                return 'You Lose!';
                break;
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'You Lose!';
                break;
            case 'paper':
                return 'You Win!';
                break;
            case 'scissors':
                return 'Draw!';
                break;
        }
    } else {

    }
}