let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let roundOutcome = "";
const rpsArray = ["rock", "paper", "scissor"]

// This function returns a random index from rpsArray.
function computerPlay() 
{
    // Math.floor() rounds down to the nearest whole number.
    //math.random() generates a random number between 0 and 1 exclusive.
    return rpsArray[Math.floor(Math.random()*rpsArray.length)]
}

// This function decides who is the winner of a single round.
function playRound(playerSelection, computerSelection) 
{
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower == computerSelection)
    {
        return "Tie Game!";
    }
    else if (playerSelectionLower == "rock" && computerSelection == "paper")
    {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelectionLower;
    }
    else if (playerSelectionLower == "rock" && computerSelection == "scissor")
    {
        playerScore++;
        return "You win! " + playerSelectionLower + " beats " + computerSelection;
    }
    else if (playerSelectionLower == "paper" && computerSelection == "rock")
    {
        playerScore++;
        return "You win! " + playerSelectionLower + " beats " + computerSelection;
    }
    else if (playerSelectionLower == "paper" && computerSelection == "scissor")
    {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelectionLower;
    }
    else if (playerSelectionLower == "scissor" && computerSelection == "rock")
    {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelectionLower;
    }
    else if (playerSelectionLower == "scissor" && computerSelection == "paper")
    {
        playerScore++;
        return "You win! " + playerSelectionLower + " beats " + computerSelection;
    }
}

// This function will accept user input and determine the winner after 5 rounds. 
function game()
{
    for (let i = 0; i < 5; i++)
    {
        playerSelection = window.prompt("Enter 'rock', 'paper' or 'scissor':");
        roundOutcome = playRound(playerSelection, computerPlay());
        console.log(roundOutcome);
    }

    if (playerScore > computerScore)
    {
        console.log("Congrats! You have beaten the computer in a game of rock paper scissors");
    }

    if (playerScore < computerScore)
    {
        console.log("Bummer! The computer has beaten you in a game of rock paper scissors");
    }

    if (playerScore == computerScore)
    {
        console.log("You and the computer have tied in a game best of five. Play again!");
    }
}

game();

