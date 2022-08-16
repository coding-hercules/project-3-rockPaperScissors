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