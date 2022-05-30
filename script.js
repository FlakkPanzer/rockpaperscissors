let computerSelection = 0;
let playerSelection = 0;
const rpsArray = ["rock", "paper", "scissors"]

// This function returns a random index from rpsArray
function computerPlay() 
{
    // Math.floor() rounds down to the nearest whole number.
    //math.random() generates a random number between 0 and 1 exclusive.
    return rpsArray[Math.floor(Math.random()*rpsArray.length)]
}

function round(playerSelection, computerSelection) 
{

}
