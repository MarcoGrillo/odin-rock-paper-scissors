function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Choose between Rock, Paper and Scissors :)");

  if (!["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
    console.log("Invalid choice :(");
    getHumanChoice();
  } else {
    return choice;
  }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    console.log("Human beats Machine!")
  } else {
    computerScore++;
    console.log("Machine beats Human!")
  }
}



for (let i = 0; i < 5; ++i) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log("Human choice - " + humanChoice);
  console.log("Computer choice - " + computerChoice);

  playRound(humanChoice, computerChoice);
}

alert("Final score: Human " + humanScore + " - Computer " + computerScore);

