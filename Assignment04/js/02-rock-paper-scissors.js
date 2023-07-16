function getUserChoice() {
    let choice = prompt(
      "Enter your choice: rock, paper, or scissors"
    ).toLowerCase();
    return choice;
  }
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  function isValidChoice(choice) {
    const validChoices = ["rock", "paper", "scissors"];
    return validChoices.includes(choice);
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  function playGame() {
    const userChoice = getUserChoice();
    if (!isValidChoice(userChoice)) {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
      return;
    }
    const computerChoice = getComputerChoice();
  
    alert(
      `You chose ${userChoice}.\nThe computer chose ${computerChoice}.\n${determineWinner(
        userChoice,
        computerChoice
      )}`
    );
  }
  
  playGame();
  
  