const rockButton = document.querySelector("#rock");
const scissorButton = document.querySelector("#scissor"); 
const paperButton = document.querySelector("#paper");

rockButton.addEventListener("click", () => {
  playRound("rock");});

scissorButton.addEventListener("click", () => {
  playRound("scissor");});

paperButton.addEventListener("click", () => {
  playRound("paper");});

const divResult1 = document.querySelector("#result1");
const divResult2 = document.querySelector("#result2");
const divResult3 = document.querySelector("#result3");
let humanScore = 0;
let machineScore = 0;
let draw = 0;


function updateDashaboar() {
  divResult1.textContent = `human score: ${humanScore}`;
  divResult2.textContent = `machine score: ${machineScore}`;
  divResult3.textContent = `draw ${draw}`;
}

updateDashaboar()

function computerPlay() {
  let randomPlay = Math.floor(Math.random() * 3);
  
  if(randomPlay === 0) {
    return "rock";
  }
  
  if(randomPlay === 1) {
    return "paper";
  }
  
  if(randomPlay === 2) {
    return "scissor";
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  
  
  if(computerSelection === "rock" && playerSelection === "paper") {
    humanScore++;
    updateDashaboar();
    checkVicotor()
    console.log(humanScore + " " + machineScore);
    return "human won";
  }

  else if(computerSelection === "rock" && playerSelection === "rock") {
    draw++;
    updateDashaboar();
    console.log(humanScore + " " + machineScore);
    return "draw";
  }

  else if(computerSelection === "rock" && playerSelection === "scissor") {
    machineScore++;
    updateDashaboar();
    checkVicotor()
    console.log(humanScore + " " + machineScore);
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="paper") {
    draw++;
    updateDashaboar();
    console.log(humanScore + " " + machineScore);
    return "draw";
  }

  else if(computerSelection === "paper" && playerSelection ==="rock") {
    machineScore++;
    updateDashaboar();
    checkVicotor()
    console.log(humanScore + " " + machineScore);
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="scissor") {
    humanScore++;
    updateDashaboar();
    checkVicotor()
    console.log(humanScore + " " + machineScore);
    return "human won";
  }

  else if(computerSelection === "scissor" && playerSelection ==="paper") {
    machineScore++;
    updateDashaboar();
    checkVicotor()
    console.log(humanScore + " " + machineScore);
    return "machine victory";
  }

  else if(computerSelection === "scissor" && playerSelection ==="rock") {
    humanScore++;
    updateDashaboar();
    checkVicotor()
    console.log(humanScore + " " + machineScore);
    return "human won";
  }

  else {
    draw++;
    updateDashaboar();
    console.log(humanScore + " " + machineScore);
    return "draw";
  }
}

function checkVicotor() {
  if(humanScore === 5) {
    alert("human victory");
    humanScore = 0;
    machineScore = 0;
    draw = 0;
    updateDashaboar();
  }

  if(machineScore === 5) {
    alert("machine victory")
    humanScore = 0;
    machineScore = 0;
    draw = 0;
    updateDashaboar();
    }
}

