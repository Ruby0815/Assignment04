var userChoice;

userChoice = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).toLowerCase();
let computerChoice = Math.floor(Math.random() * 10 + 1);

if (computerChoice <= 3) {
  computerChoice = "rock";
} else if (computerChoice <= 6) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

console.log("computer Choice: " + computerChoice);

if (userChoice === computerChoice) {
  console.log("user Choice: " + userChoice);
  console.log("computer Choice: " + computerChoice);
  alert('It\'s a tie!');
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    alert('You win! The computer picked scissors.');
  } else {
    alert('You lose! The computer picked paper.');
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    alert('You win! The computer picked rock.');
  } else {
    alert('You lose! The computer picked scissors.');
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "paper") {
    alert('You win! The computer picked paper.');
  } else {
    alert('You lose! The computer picked rock.');
  }
} else {
  alert('Invalid choice. Please choose rock, paper, or scissors.');
}
