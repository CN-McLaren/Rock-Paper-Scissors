function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computerChoice = (getRandomNumber(1, 3));

function getComputerChoice() {

if(computerChoice === 1) {
    return("Rock");
}
else if(computerChoice === 2) {
    return("Paper");
}
else if (computerChoice === 3) {
    return("Scissors");
}
}

function getPlayerSelection(x) {
    var x = window.prompt("Choose Rock, Paper or Scissors?");
    return (x);
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Rock") {
        alert("draw!"); }
    else if (computerSelection === "Scissor" && playerSelection === "Scissor") {
        alert("draw!"); }
    else if (computerSelection === "Paper" && playerSelection === "Paper") {
        alert("draw!"); } 
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
        alert("You Win!"); }     
    else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        alert("You Win!"); }     
    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        alert("You Win!"); }
        else if (computerSelection === "Paper" && playerSelection === "Rock") {
        alert("You Lose!"); }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        alert("You Lose!"); }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        alert("You Lose!"); }
    }

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));