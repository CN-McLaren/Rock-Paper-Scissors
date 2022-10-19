function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computerChoice = (getRandomNumber(1, 3));

function getComputerChoice() {

if(computerChoice === 1) {
    return("rock"); }
else if(computerChoice === 2) {
    return("paper"); }
else if (computerChoice === 3) {
    return("scissors"); }
}


let compScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = `you tied! you both picked ${playerSelection}`
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++
        const p = document.createElement('p')
        p.innerText = "You Win! their rock was no match for your paper!"   
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++    
        const p = document.createElement('p')
        p.innerText = "You Win! rock crushes scissors everytime!" 
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        const p = document.createElement('p')
        p.innerText = "You Win! their flimsly paper is no match for the mighty scissors!" 
        outcomeDiv.appendChild(p) }
        else if (computerSelection === "paper" && playerSelection === "Rock") {
        compScore++
        const p = document.createElement('p')
        p.innerText = "You Lose! lose by suffocation!" 
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        compScore++
        const p = document.createElement('p')
        p.innerText = "You Lose! crushed by the boulder of sysiphus" 
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        compScore++
        const p = document.createElement('p')
        p.innerText = "You Lose! what did you expect? you used paper..." 
        outcomeDiv.appendChild(p) }
    }

const outcomeDiv = document.querySelector('.outcome');
const playerScissors = document.querySelector('.container').querySelector('.player').querySelector('.playerChoices').querySelector('.playerScissors');
const playerPaper = document.querySelector('.container').querySelector('.player').querySelector('.playerChoices').querySelector('.playerPaper');
const playerRock = document.querySelector('.container').querySelector('.player').querySelector('.playerChoices').querySelector('.playerRock');

playerScissors.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    console.log(computerSelection);
    });

playerPaper.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    return playRound;
});
playerRock.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    return playRound;
});


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

