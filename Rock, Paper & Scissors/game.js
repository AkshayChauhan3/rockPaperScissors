let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore")
const choices = document.querySelectorAll(".choice");

function gencompChoice() {
    const opt = ["stone","paper","scissors"]
    const ind = Math.floor(Math.random() * 3);
    return opt[ind];
}

function drawGame() {
    // console.log("Game was Draw!");
    msg.innerText = "Ohh the Game Was Draw!"
    msg.style.backgroundColor = "#081b31";
}

function showWinner(userWin,userChoice,comChoice) {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `Nice your ${userChoice} beats My ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Haha My ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    // console.log("User Choice = ",userChoice);
    const comChoice = gencompChoice();
    // console.log("Computer Choice = ",comChoice);
    
    if(userChoice === comChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper,scissors
            userWin = comChoice === "paper" ? false : true;
        } 
        else if(userChoice = "paper") {
            //rock,scissors
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            //rock , paper 
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
