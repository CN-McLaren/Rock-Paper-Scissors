function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computerChoice = (getRandomNumber(1, 3));

function getComputerChoice() {

if(computerChoice === 1) {
    return("rock");
}
else if(computerChoice === 2) {
    return("paper");
}
else if (computerChoice === 3) {
    return("scissors");
}
}

function getPlayerSelection(x) {
    var x = window.prompt("Choose Rock, Paper or Scissors?").toLowerCase();
    return (x);
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        alert("draw!"); }
    else if (computerSelection === "scissor" && playerSelection === "scissor") {
        alert("draw!"); }
    else if (computerSelection === "paper" && playerSelection === "paper") {
        alert("draw!"); } 
    else if (computerSelection === "rock" && playerSelection === "paper") {
        alert("You Win!"); }     
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        alert("You Win!"); }     
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        alert("You Win!"); }
        else if (computerSelection === "paper" && playerSelection === "Rock") {
        alert("You Lose!"); }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        alert("You Lose!"); }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        alert("You Lose!"); }
    }

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));