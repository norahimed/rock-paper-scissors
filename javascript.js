// randomly returns either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    if (rand == 1)
        return 'Rock';
    else if (rand == 2)
        return 'Paper';
    else 
        return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    pS = playerSelection.toUpperCase();
    cS = computerSelection.toUpperCase();

    if (pS == cS)
        return "It's a tie";
    if (pS == 'ROCK')
    {
        if (cS == 'SCISSORS')
            return "You Win! Rock beats Scissors.";
        else
            return "You Lose! Rock beats Scissors.";
    }

    if (pS == 'PAPER')
    {
        if (cS == 'ROCK')
            return "You Win! Paper beats Rock.";
        else
            return "You Lose! Paper beats Rock.";
    }

    if (pS == 'SCISSORS')
    {
        if (cS == 'PAPER')
            return "You Win! Scissors beats Paper.";
        else
            return "You Lose! Scissors beats Paper.";    
    }


}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))