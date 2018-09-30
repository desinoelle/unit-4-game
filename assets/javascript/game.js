//Variables to store the random number, wins, losses, and score
var randomNum;
var wins = 0;
var losses = 0;
var score;

//Variable that determines if the game is still running (aka whether or not the user has won)
var running;

//Array that stores random values for crystals
var crystalValues = [];

newGame();

function newGame() {
    //Set score to "0" and running to "true"
    score = 0;
    running = true;

    //Get random number
    randomNum = Math.floor(Math.random() * 101) + 19;

    //Initialize these divs
    $("#random-num").text(randomNum);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score-total").text(score);
    $("#message").text("...");

    //Get random values for crystals
    crystalValues[0] = Math.floor(Math.random() * 12) + 1;
    crystalValues[1] = Math.floor(Math.random() * 12) + 1;
    crystalValues[2] = Math.floor(Math.random() * 12) + 1;
    crystalValues[3] = Math.floor(Math.random() * 12) + 1;
}

//Add specific crystal value to score if clicked on
//Don't allow if user has won or lost
//Uses the checker function to see if the user has won or lost after each click
$("#crystal1").on("click", function(){
    if (running === true) {
        score += crystalValues[0];
        $("#score-total").text(score);
        checker();
    }
});

$("#crystal2").on("click", function(){
    if (running === true) {
        score += crystalValues[1];
        $("#score-total").text(score);
        checker();
    } 
});

$("#crystal3").on("click", function(){
    if (running === true) {
        score += crystalValues[2];
        $("#score-total").text(score);
        checker();
    } 
});

$("#crystal4").on("click", function(){
    if (running === true) {
        score += crystalValues[3];
        $("#score-total").text(score);
        checker();
    } 
});

//Reset button
$("#reset").on("click", function(){
    newGame();
});

function checker() {
    //If the player wins...
    if (score === randomNum) {
        //Update wins
        wins++;
        $("#wins").text(wins);

        //Prompt user in message box to reset the game
        $("#message").text("You won! Press the 'Reset Game' button to play again!");

        running = false;
    }

    //If the player loses...
    if (score > randomNum) {
        //Update losses
        losses++;
        $("#losses").text(losses);

        //Prompt user in message box to reset the game
        $("#message").text("Sorry! You lost the game! Press the 'Reset Game' button to play again!");

        running = false;
    }
}
