/*
Het spel;Guess the number

 */

var guess = 0;
var computer = math.random() * 100;

var intput = document.querySelector("#userInput");
var output = document.querySelector("#outputtext");

var btn = document.querySelector("#btn");
btn.addEventListener("click", onMouseClick);

function onMouseClick() {
    output.innerHTML = input.value;
}