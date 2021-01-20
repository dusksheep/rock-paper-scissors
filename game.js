
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
    console.log("computer player rock");
    return rock;
  }
  
  else if(randomPlay === 1) {
    console.log("computer player paper");
    return paper;
  }
  
  else if(randomPlay === 2) {
    console.log("computer player paper");
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
    console.log("human won");
    return "human won";
  }

  else if(computerSelection === "rock" && playerSelection === "rock") {
    console.log("draw");
    return "draw";
  }

  else if(computerSelection === "rock" && playerSelection === "scissor") {
    console.log("machine victory");
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="paper") {
    console.log("draw");
    return "draw";
  }

  else if(computerSelection === "paper" && playerSelection ==="rock") {
    console.log("machine victory");
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="scissor") {
    console.log("human won");
    return "human won";
  }

  else if(computerSelection === "scissor" && playerSelection ==="paper") {
    console.log("machine victory");
    return "machine victory";
  }

  else if(computerSelection === "scissor" && playerSelection ==="rock") {
    console.log("human won");
    return "human won";
  }

  else {
    console.log("draw");
    return "draw";
  }
}

function game() {
  console.log("game started");
  let i = 0;
  let humanScore = 0;
  let machineScore = 0;
  let drawScore = 0;
  let keepGame = true;

  while(keepGame) {
    let roundResult = playRound();
    
    
    if(roundResult === "human won") {
      humanScore = humanScore + 1;
      checkWinner(humanScore, machineScore);
    }
    
    else if(roundResult === "machine victory") {
      machineScore = machineScore + 1;
      checkWinner(humanScore, machineScore);
    }
  
    else if(roundResult === "draw") {
      drawScore = drawScore + 1;
    }
    
  }

  const divResult = document.querySelector("#result");
  divResult.textContent = "humanScore: " + humanScore + "\n" + "machineScore: " + 
  machineScore + "\n" +"draw: " + drawScore;  
}

function checkWinner(humanScore, machineScore) {
  console.log("check winner started")
  const finalResult = document.querySelector("#finalResult");
  finalResult.textContent = "final result div";
  
  if(humanScore === 5) {
    keepGame = false;
    finalResult.textContent = "you won";
  }

  if(machineScore === 5) {
    keepGame = false;
    finalResult.textContent = "you loose";
  }
}

function startGame() {
  console.log("startGame started")
  const startButton = document.querySelector("#startGame")
  startButton.addEventListener("click", game());
}

startGame();



