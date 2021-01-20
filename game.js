
function playerPlay() {
  return prompt("rock, paper or scissor?")
}

function computerPlay() {
  let rock = "rock";
  let paper = "paper";
  let scissor = "scissor";
  let randomPlay = Math.floor(Math.random() * 3);
  console.log(randomPlay);
  if(randomPlay === 0) {
    return rock;
  }
  
  else if(randomPlay === 1) {
    return paper;
  }
  
  else if(randomPlay === 2) {
    return scissor;
  }
}

function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = playerPlay();
  console.log(computerSelection);
  console.log(playerSelection);
  
  if(computerSelection === "rock" && playerSelection === "paper") {
    alert("you won");
    return "human won";
  }

  else if(computerSelection === "rock" && playerSelection === "rock") {
    alert("draw");
    return "draw";
  }

  else if(computerSelection === "rock" && playerSelection === "scissor") {
    alert("you loose");
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="paper") {
    alert("draw");
    return "draw";
  }

  else if(computerSelection === "paper" && playerSelection ==="rock") {
    alert("you loose");
    return "machine victory";
  }

  else if(computerSelection === "paper" && playerSelection ==="scissor") {
    alert("you won");
    return "human won";
  }

  else if(computerSelection === "scissor" && playerSelection ==="paper") {
    alert("you loose");
    return "machine victory";
  }

  else if(computerSelection === "scissor" && playerSelection ==="rock") {
    alert("you won");
    return "human won";
  }

  else {
    alert("draw");
    return "draw";
  }
}

function game() {
  let i = 0;
  let humanScore = 0;
  let machineScore = 0;
  let drawScore = 0;

  while(i<5) {
    let roundResult = playRound();
    
    
    if(roundResult === "human won") {
      humanScore = humanScore + 1;
    }
    
    else if(roundResult === "machine victory") {
      machineScore = machineScore + 1;
    }
  
    else if(roundResult === "draw") {
      drawScore = drawScore + 1;
    }
  
    console.log("humanScore: " + humanScore);
    console.log("machineScore: " + machineScore);
    console.log("draw: " + drawScore);
    i++;
  }
}


