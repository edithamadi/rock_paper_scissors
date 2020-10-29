let playerScore = 0
let computerScore = 0

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let selection = Math.floor(Math.random() * choices.length)
    return choices[selection].toLowerCase()
}
function userInput() {
    let userInput = prompt('please choose Rock, Paper or Scissors to play')
    return userInput.toLowerCase()
}
function playRound(playerselection, computerselection){
    if (playerselection === computerselection){
        return "This is tie"
    }
    else if (playerselection === "rock" && computerselection === "scissors"){
        playerScore ++
        return "You win! rock beats scissors"
        
    }
    else if (playerselection === "rock" && computerselection === "paper"){
        computerScore ++
        return "You lose! paper beats rock"
        
    }
    else if (playerselection === "scissors" && computerselection === "paper"){
        playerScore ++
        return "You win! scissors beats paper"
        
    }
    else if (playerselection === "scissors" && computerselection === "rock"){
        computerScore ++ 
        return "You lose! rock beats scissors"
        
    }
    else if (playerselection === "paper" && computerselection === "scissors"){
        computerScore ++
        return "You lose! paper beats scissors"
        
    }
    else if (playerselection === "paper" && computerselection === "rock"){
        playerScore ++
        return "You win! paper beats rock"
        
    }
    else {
        return "player selection is invalid"
    }
}
function game(){
    for (i = 0; i < 5; i++){
        
        let results = playRound(userInput(),computerPlay())
        console.log(results);
    }
    console.log(computerScore + " : " + playerScore);
    if (computerScore > playerScore)
        return `Sorry!! You lose. Your score is ${playerScore} and computer score is ${computerScore}`
    else if (playerScore > computerScore)
        return `Congratulations!! You won. Your score is ${playerScore} and computerScore is ${computerScore}`
    else 
        return `Your scores are equal`  
}
