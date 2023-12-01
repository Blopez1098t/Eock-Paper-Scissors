let userChoice;
let compChoice;
let randomNum;
let numLimit ;
let winner ;

//random numbers (Inclusive 0-exclusive range)
// Function : generate random number from 0-3
function getRandomNum(low, high){
    return Math.floor(Math.random() * (high - low)) + low;
}

// Switch statements
function chooseMove(){
    switch (randomNum){
        case '0':
            return ('rock');
        break;
    
        case '1':
            return ('paper');
        break;
    
        case '2':
            return ('scissors');
        break;
    }
}
// Comparisons
function determineWinner(){
    if(userChoice === "rock" && compChoice === "paper"){
        return "Computer"
    }  else if(userChoice === "rock" && compChoice === "scissors"){
        return "User";
    } else if(userChoice === "paper" && compChoice === "rock"){
        return "User";
    } else if(userChoice === "paper" && compChoice === "scissors"){
        return "Computer";
    } else if(userChoice === "scissors" && compChoice === "rock"){
        return "Computer";
    } else if(userChoice === "scissors" && compChoice === "paper"){
        return "User";
    } else if (userChoice === CompChoice){
        return "No win! Its a tie";
    }
}
// Console Logs
 //Play
userChoice = chooseMove(getRandomNum(0,3));
console.log("User Chose:" + userChoice);

compChoice = chooseMove(getRandomNum(0,3));
console.log("Computer Chose:" + compChoice);

winner = determineWinner();
console.log("The winner is..:" + winner);