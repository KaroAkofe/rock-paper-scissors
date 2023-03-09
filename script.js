const playerResult = document.querySelector('.player-result');
const computerResult = document.querySelector('.computer-result');
const buttons = document.querySelectorAll('.button');
const finalResult = document.querySelector('.round-5-result');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const drawScoreText = document.querySelector('.draws');
const refreshBtn = document.querySelector('.refresh');
const resultDiv = document.querySelector('.result-div');

// computer selects a random option from the array 
const computerChoices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let choice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return choice;
}

// make user input case insensitive
// function capitalize() {
//     let question = prompt("Rock, Paper, or Scissors?");
//     return question.slice(0,1).toUpperCase() + question.slice(1).toLowerCase();
// }


// initialize variables that keep score
let playerScore = 0;
let computerScore = 0;
let draws = 0;


const playerWin = "You won the game!";
const computerWin = "Computer won the game!";
const tieGame = "You both have the same score. It's a tie";


//event listeners
buttons.forEach(button => button.addEventListener('click', function playGame() {
    
    let playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    playerScoreText.textContent = `Player score: ${playerScore}`;
    playerResult.textContent = playerSelection;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    computerResult.textContent = computerSelection;
    finalResult.textContent = roundResult;

    if(playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            resultDiv.textContent = playerWin;
            resultDiv.style.color = 'green';
        } else if (computerScore > playerScore) {
            resultDiv.textContent = computerWin;
            resultDiv.style.color = 'red';
        } else if (playerScore === computerScore) {
            resultDiv.textContent = tieGame;
            resultDiv.style.color = 'orange';
        }
        gameOver();
    }
}));

function newGame() {
    playerScoreText.textContent = '';
    playerResult.textContent = '';
    computerScoreText.textContent = '';
    computerResult.textContent = '';
    finalResult.textContent = '';
    resultDiv.textContent = '';
    playerScore = 0;
    computerScore = 0;
    

    buttons.forEach(button => button.disabled = false);
}
refreshBtn.addEventListener('click', newGame);

function gameOver(){
    buttons.forEach(button => button.disabled = true);
}


// play a single round of the game, determine the winner and keep score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
        
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats Rock";
        
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
        
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
        
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
        
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore++;
        return "You win! Rock beats Scissors";
    } else {
        return "Please enter a valid option";
    }
}



    // play the game for 5 rounds by looping 5 times and calling the playRound function inside of the loop
    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = capitalize();
    //     const computerSelection = getComputerChoice();
    //     let roundResult = playRound(playerSelection, computerSelection);
    //     console.log(roundResult);
    //     console.log(`Player score: ${playerScore}`);
    //     console.log(`Computer score: ${computerScore}`);
    // }
    // printfinalResult();

    // Determine the winner after 5 rounds and invoke the function just after the 5 round loop
   /*  function printfinalResult() {
        if (playerScore > computerScore) {
            console.log(playerWin);
        } else if (computerScore > playerScore) {
            console.log(computerWin);
        } else if (playerScore === computerScore) {
            console.log(tieGame);
        }
    } */
    
    