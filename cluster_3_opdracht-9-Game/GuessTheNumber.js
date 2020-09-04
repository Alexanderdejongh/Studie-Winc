/*
Het spel;Guess the number

 */

var namePrompt = window.prompt("What your Name?");

var playerName = document.getElementById("namePlayer");
playerName.innerHTML = "Welcome " + namePrompt + "!";

var maxGuesses = 5;
var btn = document.getElementById("btn");
var output = document.getElementById("outputtext");

let randomNumber = Math.floor(Math.random() * 25) + 1;

// console.log(randomNumber);

btn.addEventListener("click", function() {
    var input = document.getElementById("userInput").value;
    maxGuesses--;
    if (input == randomNumber) {
        output.innerHTML = `You guessed right, your nuber was: ${randomNumber} `;
    } else if (input < randomNumber) {
        output.innerHTML = "You guessed to low!";
    }
    if (input > randomNumber) {
        output.innerHTML = "You guessed to high!";
    }
    if (maxGuesses == 0) {
        alert("Refresch page with F5!");
    }
});

/*Zelf de range bepalen waaruit de gebruiker gaat raden.
Als gebruiker wil ik bij de start van het spel gevraagd worden wat het kleinste en het grootste nummer is dat ik wil raden.
Als gebruiker speel ik nu het spel met de nummer-range die ik heb aangegeven bij de start van het spel.*/