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