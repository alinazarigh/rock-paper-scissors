let playerScore = 0,
    computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const resultInfo = document.querySelector(".result-info");
function getIcon(hand) {
    return `icons/${hand === "rock" ? "cartoon-rock.svg" : hand === "paper" ? "paper-grain.svg" : "scissors.svg"}`;
}
function playRound(playerChoice, computerChoice) {
    let resultInfoText = "";
    if (playerChoice === computerChoice) {
        resultInfoText = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultInfoText = "You won!";
        playerScore++;
    } else {
        resultInfoText = "You lost!";
        computerScore++;
    }
    document.querySelector(".player-score").textContent =
        "Your Score: " + playerScore;
    document.querySelector(".computer-score").textContent =
        "My Score: " + computerScore;
    document
        .querySelector(".player-hand")
        .setAttribute("src", getIcon(playerChoice));
    document
        .querySelector(".computer-hand")
        .setAttribute("src", getIcon(computerChoice));
    resultInfo.textContent = resultInfoText;
}

const buttons = document.querySelectorAll(".hands-button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});
