let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(userChoice) +
    "beats" +
    convertToWord(computerChoice) +
    ".जित्नुभयो....";
  console.log("userChoice");
  console.log("computerChoice");
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(userChoice) +
    "beats" +
    convertToWord(computerChoice) +
    "हारनुभयो....";
  console.log("userChoice");
  console.log("computerChoice");
}
function draw(userChoice, computerChoice) {
  result_p.innerHTML =
    convertToWord(userChoice) +
    "beats" +
    convertToWord(computerChoice) +
    ".बराबर....";
  console.log("userChoice");
  console.log("computerChoice");
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      console.log("user Wins");
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      console.log("user lose");
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      console.log("draws");
  }
}
function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissor_div.addEventListener("click", function() {
    game("s");
  });
}
main();

function loadText() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "score.json", true);

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}
