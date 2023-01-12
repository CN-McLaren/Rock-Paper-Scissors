let compScore = 0;
let playerScore = 0;
let ties = 0;

const playerScissors = document.querySelector('.container').querySelector('.player').querySelector('.playerChoices').querySelector('.playerScissors');
const playerPaper = document.querySelector('.container').querySelector('.player').querySelector('.playerChoices').querySelector('.playerPaper');
const playerRock = document.querySelector('.container').querySelector('.player').querySelector('.playerChoices').querySelector('.playerRock');

function playRound(playerSelection, computerSelection) {
    const outcomeDiv = document.querySelector('.outcome');
    if (playerSelection === computerSelection) {
        clearRound();
        const p = document.createElement('p')
        p.innerText = `you tied! you both picked ${playerSelection}`
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++
        clearRound();
        const p = document.createElement('p')
        p.innerText = "You Win! their rock was no match for your paper!"   
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++ 
        clearRound();
        const p = document.createElement('p')
        p.innerText = "You Win! rock crushes scissors everytime!" 
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        clearRound();
        const p = document.createElement('p')
        p.innerText = "You Win! their flimsly paper is no match for the mighty scissors!" 
        outcomeDiv.appendChild(p) }
        else if (computerSelection === "paper" && playerSelection === "Rock") {
        compScore++
        clearRound();
        const p = document.createElement('p')
        p.innerText = "You Lose! lose by suffocation!" 
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        compScore++
        clearRound();
        const p = document.createElement('p')
        p.innerText = "You Lose! crushed by the boulder of sisyphus" 
        outcomeDiv.appendChild(p) }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        compScore++
        clearRound();
        const p = document.createElement('p')
        p.innerText = "You Lose! what did you expect? you used paper..." 
        outcomeDiv.appendChild(p) }
    }

playerScissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, compScore);
    winCount();
    });

playerPaper.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, compScore);
    winCount();
});
playerRock.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, compScore);
    winCount();
});

function checkWinner () {
    if (compScore === 5)
    alert ("Computer Wins!");
    else if (playerScore === 5)
    alert ("Player Wins!");
}

function winCount () {
    const pWinCount = playerScore;
    const cWinCount = compScore;
    document.querySelector(".playerScore").textContent = `score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `score: ${cWinCount}`;
}

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
let computerChoice = (getRandomNumber(1, 3));
if(computerChoice === 1) {
    return("rock"); }
else if(computerChoice === 2) {
    return("paper"); }
else if (computerChoice === 3) {
    return("scissors"); }
}

 function clearRound() {
    let remove = document.querySelector('.scoreContainer').querySelector('.outcome').querySelector('p');
    remove.parentNode.removeChild(remove);
}

function computerChoices() {
    alert("No touch!")
}