
function playerPlay() {
  const rockButton = document.querySelector("#rock");
  const scissorButton = document.querySelector("#scissor"); 
  const paperButton = document.querySelector("#paper");
  
  rockButton.addEventListener("click", () => {
    console.log("player played rock");
    return "rock";
  });
  
  scissorButton.addEventListener("click", () => {
    console.log("player played scissor");
    return "scissor";
  });
  
  paperButton.addEventListener("click", () => {
    console.log("player played paper");
    return paper;
  })
}

function computerPlay() {
  let rock = "rock";
  let paper = "paper";
  let scissor = "scissor";
  let randomPlay = Math.floor(Math.random() * 3);
  
  if(randomPlay === 0) {
    console.log("computerPlay = rock");
    return rock;
  }
  
  else if(randomPlay === 1) {
    console.log("computerPlay = paper");
    return paper;
  }
  
  else if(randomPlay === 2) {
    console.log("computerPlay = paper");
    return scissor;
  }
}

function playRound() {
  console.log("round started");
  let computerSelection = computerPlay();
  let playerSelection = playerPlay();
  console.log(computerSelection);
  console.log(playerSelection);
  
  if(computerSelection === "rock" && playerSelection === "paper") {
    console.log("playRound() human won");
    return "human won";
  }

  else if(computerSelection === "rock" && playerSelection === "rock") {
    console.log("playRound() draw");
    return "draw";
  }

  else if(computerSelection === "rock" && playerSelection === "scissor") {
    console.log("playRound() machine victory");
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="paper") {
    console.log("playRound() draw");
    return "draw";
  }

  else if(computerSelection === "paper" && playerSelection ==="rock") {
    console.log("playRound() machine victory");
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="scissor") {
    console.log("playRound() human won");
    return "human won";
  }

  else if(computerSelection === "scissor" && playerSelection ==="paper") {
    console.log("playRound() machine victory");
    return "machine victory";
  }

  else if(computerSelection === "scissor" && playerSelection ==="rock") {
    console.log("playRound() human won");
    return "human won";
  }

  else {
    console.log("playRound() draw");
    return "draw";
  }
}

function game() {
  
  let humanScore = 0;
  let machineScore = 0;
  let drawScore = 0;
  let i = 0;

  while(i < 5) {
    let roundResult = playRound();
    
    
    if(roundResult === "human won") {
      humanScore = humanScore + 1;
      
    }
    
    if(roundResult === "machine victory") {
      machineScore = machineScore + 1;
      
    }
  
    if(roundResult === "draw") {
      drawScore = drawScore + 1;
    }
    
    i++;
    
  }

  const divResult = document.querySelector("#result");
  divResult.textContent = "humanScore: " + humanScore + "\n" + "machineScore: " + 
  machineScore + "\n" +"draw: " + drawScore;  
}

function newGame() {
  const startButton = document.querySelector("#startGame")
  startButton.addEventListener("click", game());
}

newGame();



