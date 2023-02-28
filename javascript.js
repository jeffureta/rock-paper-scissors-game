function getRandomChoice() {

    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];

}

function playRound(playerSelection, computerSelection) {
    //convert both selections to lowercase for case-insensitive comparison
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase()

    if (playerChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Round ${i}: Choose rock, paper, or scissors:`);
        const computerSelection = getRandomChoice();
        const result = playRound(playerSelection, computerSelection);
        alert(result);

        if (result.startsWith('You win')) {
            playerScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        alert(`You win the game! Final score: ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        alert(`You lose the game! Final score: ${computerScore} - ${playerScore}`);
    } else {
        alert(`It's a tie game! Final score: ${playerScore} - ${computerScore}`);
    }
}
