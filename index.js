function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * 3)];
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const actionCompletedContainer = document.querySelector(".action-completed-container");
  let actionText = actionCompletedContainer.querySelector("p");

  if (!actionText) {
    actionText = document.createElement("p");
    actionCompletedContainer.appendChild(actionText);
  }

  actionText.style.color = "white";
  actionText.style.fontSize = "50px";

  if (checkWinner(actionText)) {
    return;
  }

  if (humanChoice === computerChoice) {
    actionText.textContent = "It's a tie!";
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    actionText.textContent = "Human beats Computer!";
    updateScore("human", humanScore);
  } else {
    computerScore++;
    actionText.textContent = "Computer beats Human!";
    updateScore("computer", computerScore);
  }

  checkWinner(actionText);
}


function updateScore(scoreId, scoreNum) {
  const score = document.querySelector("#" + scoreId);

  score.textContent = scoreNum;
}

function checkWinner(actionText) {
  if (humanScore === 5) {
    actionText.innerHTML = "Human won &#127881;";
    return true;
  } else if (computerScore === 5) {
    actionText.innerHTML = "Computer won &#127881;";

    return true;
  }

  return false;
}
