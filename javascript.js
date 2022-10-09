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

let compScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "rock") {
        alert("draw!") }
    else if (computerSelection === "scissor" && playerSelection === "scissor") {
        alert("draw!") }
    else if (computerSelection === "paper" && playerSelection === "paper") {
        alert("draw!") } 
    else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++
        alert("You Win! their rock was no match for your paper!") }   
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++    
        alert("You Win! rock crushes scissors everytime!") }  
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        alert("You Win! their flimsly paper is no match for the mighty scissors!") }
        else if (computerSelection === "paper" && playerSelection === "Rock") {
        compScore++
        alert("You Lose! lose by suffocation!") }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        compScore++
        alert("You Lose! crushed by the boulder of sysiphus") }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        compScore++
        alert("You Lose! what did you expect? you used paper...") }
    }

function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors?").toLowerCase()
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    }
    if (playerScore > compScore) {
        alert ("You beat the computer!"); }
    else if (playerScore < compScore) {
        alert ("You lost to the computer!"); }
}