let playerSelection;
let computerSelection;

let playerWin = 0;
let computerWin = 0;

const pC = document.querySelector('#playerChoice');
const cC = document.querySelector('#computerChoice');
const res = document.querySelector('#Results');
const totalRes = document.querySelector('#totalResults');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const btns = document.querySelectorAll('.btn');
const newGame = document.querySelector('#newGame');
const playerTot = document.querySelector('#playerTotal');
const computerTot = document.querySelector('#computerTotal');


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
    let score = checkWhoWon(pS, cS);
    
    pC.textContent =`You chose: ${pS}\n`
    cC.textContent = `Computer chose: ${cS}\n`
    res.textContent = score;
    return score;
}


function checkWhoWon(pS, cS) {
    if (pS == cS)
        return "It's a tie :|";
    if (pS == 'ROCK')
    {
        if (cS == 'SCISSORS')
            return "You Win :)";
        else
            return "You Lose :(";
    }

    if (pS == 'PAPER')
    {
        if (cS == 'ROCK')
            return "You Win :)";
        else
            return "You Lose :(";
    }

    if (pS == 'SCISSORS')
    {
        if (cS == 'PAPER')
            return "You Win :)";
        else
            return "You Lose :(";    
    }
}

function game() {
    let score;

    rock.addEventListener('click', function() {
        score = playRound('Rock', computerPlay());
        if (score == "You Win :)")
        {
            playerWin++;
            console.log(`player: ${playerWin}`);
        }
        else if (score == "You Lose :(")
        {
            computerWin++;
            console.log(`comp: ${computerWin}`);
        }

        playerTot.textContent = `Your Points: ${playerWin}`;
        computerTot.textContent = `Computer Points: ${computerWin}`;
    });

    paper.addEventListener('click', function() {
        score = playRound('Paper', computerPlay());
        if (score == "You Win :)")
        {
            playerWin++;
            console.log(`player: ${playerWin}`);
        }
        else if (score == "You Lose :(")
        {
            computerWin++;
            console.log(`comp: ${computerWin}`);
        }

        playerTot.textContent = `Your Points: ${playerWin}`;
        computerTot.textContent = `Computer Points: ${computerWin}`;
    });

    scissors.addEventListener('click', function() {
        score = playRound('Scissors', computerPlay());
        if (score == "You Win :)")
        {
            playerWin++;
            console.log(`player: ${playerWin}`);
        }
        else if (score == "You Lose :(")
        {
            computerWin++;
            console.log(`comp: ${computerWin}`);
        }

         playerTot.textContent = `Your Points: ${playerWin}`;
        computerTot.textContent = `Computer Points: ${computerWin}`;
    });

    btns.forEach(btn => btn.addEventListener('click', function() {
        console.log(`player tot: ${playerWin}`);
        console.log(`comp tot: ${computerWin}`);

        if (playerWin === 5)
        {
            totalRes.textContent = "You reached 5 points-- You won :)\n Start new game!";
        }
        if (computerWin === 5)
        {
            totalRes.textContent = "Computer reached 5 points-- You lost :(\n Start new game!";
        }
    }))

    newGame.addEventListener('click', function() {
        startNewGame();
    })

    console.log(`player tot: ${playerWin}`);
    console.log(`comp tot: ${computerWin}`);
    
}

function startNewGame()
{
    playerWin = 0;
    computerWin = 0;
    playerTot.textContent = `Your Points: ${playerWin}`;
    computerTot.textContent = `Computer Points: ${computerWin}`;
    totalRes.textContent = '';
    game();

}

game()