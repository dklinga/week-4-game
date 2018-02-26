// references for DOM elements 
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $number = document.getElementById("randomNumber");
var $score = document.getElementById("score");

//create vars for game
var wins = 0;
var losses = 0;
var numbersSelected = 0;
var targetNumber = 0;

//new game function set everything to zero gems and random number rerun 
function newGame() {
    numbersSelected = 0;
    console.log(numbersSelected);
    $("#score").text(numbersSelected);
    targetNumber = Math.floor((Math.random() * 100) + 19);
    $("#randomNumber").text(targetNumber);
    console.log(targetNumber);
    diamond = Math.floor((Math.random() * 12) + 1);
    console.log(diamond);
    emerald = Math.floor((Math.random() * 12) + 1);
    console.log(emerald);
    ruby = Math.floor((Math.random() * 12) + 1);
    console.log(ruby);
    yellow = Math.floor((Math.random() * 12) + 1);
    console.log(yellow);
}

//pick a random number for game 
targetNumber = Math.floor((Math.random() * 100) + 19);
console.log(targetNumber);
$("#randomNumber").text(targetNumber);

//Pick random numbers for the gems 
var diamond = Math.floor((Math.random() * 12) + 1);
console.log(diamond);
var emerald = Math.floor((Math.random() * 12) + 1);
console.log(emerald);
var ruby = Math.floor((Math.random() * 12) + 1);
console.log(ruby);
var yellow = Math.floor((Math.random() * 12) + 1);
console.log(yellow);

//Alert win 
function win() {
    alert("Finn, You won!");
    wins++;
    $("#wins").text(wins);
    newGame();
}

//Alert lost
function lost() {
    alert("Nuts, You lose!");
    losses++;
    $("#losses").text(losses);
    newGame();
}
//Button clicks 
$("#button-1").on("click", function () {
    numbersSelected = numbersSelected + diamond;
    $("#score").text(numbersSelected);
    if (numbersSelected == targetNumber) {
        win();
    } else if (numbersSelected > targetNumber) {
        lost();
    }
});

$("#button-2").on("click", function () {
    numbersSelected = numbersSelected + emerald;
    $("#score").text(numbersSelected);
    if (numbersSelected == targetNumber) {
        win();
    } else if (numbersSelected > targetNumber) {
        lost();
    }
});

$("#button-3").on("click", function () {
    numbersSelected = numbersSelected + ruby;
    $("#score").text(numbersSelected);
    if (numbersSelected == targetNumber) {
        win();
    } else if (numbersSelected > targetNumber) {
        lost();
    }
});

$("#button-4").on("click", function () {
    numbersSelected = numbersSelected + yellow;
    $("#score").text(numbersSelected);
    if (numbersSelected == targetNumber) {
        win();
    } else if (numbersSelected > targetNumber) {
        lost();
    }
});