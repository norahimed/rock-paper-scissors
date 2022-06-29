let playerSelection;
let computerSelection;

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
    return checkWhoWon(pS, CS);
}


function checkWhoWon(pS, cS) {
    if (pS == cS)
        return "It's a tie";
    if (pS == 'ROCK')
    {
        if (cS == 'SCISSORS')
            return "You Win!";
        else
            return "You Lose!";
    }

    if (pS == 'PAPER')
    {
        if (cS == 'ROCK')
            return "You Win!";
        else
            return "You Lose!";
    }

    if (pS == 'SCISSORS')
    {
        if (cS == 'PAPER')
            return "You Win!";
        else
            return "You Lose!";    
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;

    for (let i=0; i < 5; i++)
    {
        computerSelection = computerPlay();
        playerSelection = prompt(`Round ${i+1}: Rock, Paper, Scissors. Shoot!`)
        console.log("You chose: " + playerSelection.toUpperCase())
        console.log("Computer: " + computerSelection.toUpperCase());
        score = playRound(playerSelection, computerSelection);
        console.log(score);
        
        if (score == "You Win!")
            playerWin++;
        else if (score == "You Lose!")
            computerWin++
    }

    if (playerWin > computerWin)
        console.log("You won :)");
    else if (playerWin < computerWin)
        console.log("You lost :(");
    else 
        console.log("You tied :|")
}

