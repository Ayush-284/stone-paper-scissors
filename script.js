let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");  // to access all the choices we will use queryselectorall
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector ("#user-score");
const compScorePara = document.querySelector ("#comp-score");

const genCompChoice = () => {
const options = ["rock", "paper", "scissor"];  //random index which helps to select our options
const randInx = Math.floor(Math.random()*3);
return options[randInx];
}; 

const drawGame =() => {
    msg.innerText ="game was drawn . Play Again";
    msg.style.backgroundColor = "green";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText =  userScore;

        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText =  compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
const compChoice = genCompChoice();

if(userChoice===compChoice){
//draw game
drawGame();
} 
else {
    let userWin = true;
    if(userChoice === "rock") {
        //scissors,paper
        userWin =  compChoice=== "paper"? false : true;
    }
    else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        //rock,paper
        userWin = compChoice=== "rock" ? false : true
    }
    showWinner (userWin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {   
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});