const computerSelectionList = ["rock", "paper","scissor"];
let currentRoundNumber = 1, 
playerScore = 0,
computerScore = 0,
playerWinCount = 0,
computerWinCount = 0,
gameCount = 1,
gameWinner = "",

gameCountDiv = document.getElementById("game-count"),
computerSelectionDiv = document.getElementById("computer-selection"),
gameResultDiv = document.getElementById("game-result"),
buttons = Array.from(document.getElementsByTagName("button")),
playerWinCountDiv = document.getElementById("player-win-count"),
computerWinCountDiv = document.getElementById("computer-win-count"),
restartGameDiv = document.getElementById("restart-game-div"),
restartGameButton = document.getElementById("RestartGameButton"),
finalResultDiv = document.getElementById("final-result"),
playerSelectionDiv = document.getElementById("PlayerSelectionDiv"),
computerSelectionDisplay = document.getElementById("computer-selection-display"),
computerSelectionDisplayItem  = document.getElementById("computer-selection-display-item"),
computerWinDiv = document.getElementById("computer-win")
playerWinDiv = document.getElementById("player-win")
;


function getComputerSelection(){
    return computerSelectionList[ (Math.floor(Math.random() * 3) + 1) -1];
}

function checkCurrentRoundWinner(userSelection){

    let computerSelection = getComputerSelection();
    let winner = 2;    
    let winnerList = ["Computer", "Player", "Tie"];    
    
    winner = winnerList[GetWinner(computerSelection,userSelection)];

    if (winner == "Computer"){computerWinCount++; gameCount++;}
    else if (winner == "Player"){playerWinCount++; gameCount++;}
    

    gameCountDiv.innerHTML = "Game Count : " + gameCount;        
    computerSelectionDiv.innerHTML = computerSelection;
    gameResultDiv.innerHTML = "Game winner : " + winner;
    playerWinCountDiv.innerHTML = playerWinCount;
    computerWinCountDiv.innerHTML = computerWinCount;    
    computerSelectionDisplayItem.innerHTML = "Computer selected";

    if (playerWinCount >=5 || computerWinCount >= 5){
        console.log("game over");
        if (computerWinCount >= 5){
            gameCount.innerHTML = "Sorry you lost !!!";
        }else{
            gameCount.innerHTML = "Congratulations you wins !!!";
        }        

        restartGameButton.disabled = false;
        restartGameDiv.style.visibility = "visible";
        restartGameDiv.style.display = "block";

        finalResultDiv.style.visibility = "visible";
        finalResultDiv.style.display = "block";

        computerSelectionDiv.style.visibility = "hidden";
        computerSelectionDiv.style.display = "none";

        gameResultDiv.style.visibility = "hidden";
        gameResultDiv.style.display = "none";

        playerWinCountDiv.style.visibility = "hidden";
        playerWinCountDiv.style.display = "none";
        
        computerWinCountDiv.style.visibility = "hidden";
        computerWinCountDiv.style.display = "none";      
        
        playerSelectionDiv.style.visibility = "hidden";
        playerSelectionDiv.style.display = "none";      

        computerSelectionDiv.style.visibility = "hidden";
        computerSelectionDiv.style.display = "none";

        computerSelectionDisplay.style.visibility = "hidden";
        computerSelectionDisplay.style.display = "none";

        computerSelectionDisplayItem.style.visibility = "hidden";
        computerSelectionDisplayItem.style.display = "none";

        playerWinDiv.style.visibility = "hidden";
        playerWinDiv.style.display = "none";

        computerWinDiv.style.visibility = "hidden";
        computerWinDiv.style.display = "none";

        if (playerWinCount >= 5){
            finalResultDiv.innerHTML = "You win !!!"
        }else{
            finalResultDiv.innerHTML = "Sorry you lost. Try again."
        }
    }
}

function GetWinner(ComputerSelection, userSelection){
    // 0 = Computer winner, 1 = user winner, 2 = tie

    let rock = "rock", paper = "paper", sceissior = "scissor";


    if (ComputerSelection === userSelection){return 2;}
    //computer winer
    else if (ComputerSelection === paper && userSelection === rock){return 0;}
    else if (ComputerSelection === rock && userSelection === sceissior){return 0;}
    else if (ComputerSelection === sceissior && userSelection === paper){return 0;}
    //user winner
    else if (userSelection === paper && ComputerSelection === rock){return 1;}
    else if (userSelection === rock && ComputerSelection === sceissior){return 1;}
    else if (userSelection === sceissior && ComputerSelection === paper){return 1;}

}


function RestartGame(){
    
    playerWinCount = 0;
    computerWinCount = 0;
    gameCount = 1;
    gameCount.innerHTML = "Game Count : 1";
    playerWinCountDiv.innerHTML = "0";
    computerWinCountDiv.innerHTML = "0";
    restartGameDiv.style.visibility = "hidden";
    restartGameDiv.style.display = "none";


    finalResultDiv.style.visibility = "hidden";
    finalResultDiv.style.display = "none";

    computerSelectionDiv.style.visibility = "visible";
    computerSelectionDiv.style.display = "block";

    gameResultDiv.style.visibility = "visible";
    gameResultDiv.style.display = "block";

    playerWinCountDiv.style.visibility = "visible";
    playerWinCountDiv.style.display = "block";
    
    computerWinCountDiv.style.visibility = "visible";
    computerWinCountDiv.style.display = "block";

    playerSelectionDiv.style.visibility = "visible";
    playerSelectionDiv.style.display = "block";

    computerSelectionDisplayItem.innerHTML = "Computer is waiting for you. Let's start !!!";
    computerSelectionDiv.innerHTML = "";

    computerSelectionDiv.style.visibility = "visible";
    computerSelectionDiv.style.display = "block";

    computerSelectionDisplay.style.visibility = "visible";
    computerSelectionDisplay.style.display = "block";

    computerSelectionDisplayItem.style.visibility = "visible";
    computerSelectionDisplayItem.style.display = "block";
 
    playerWinDiv.style.visibility = "visible";
    playerWinDiv.style.display = "block";

    computerWinDiv.style.visibility = "visible";
    computerWinDiv.style.display = "block";
    
    gameResultDiv.innerHTML = "Game winner : ";
}