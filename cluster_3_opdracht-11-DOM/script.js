//buttons
var button = document.getElementById("mybutton");
var backgroundRed = document.getElementById("changeBackground");
var backgroundBlack = document.getElementById("changeBackground2");

//var's
var background = document.getElementsByClassName("blue-background");
var addclasslistred = element.background.add(" red-background");
var addclasslistblack = element.background.add(" black-background");

button.addEventListener("click", function() {
    alert("you've clicked the button");
});

backgroundRed.addEventListener("click", function() {
    document.getElementsByClassName("blue-background");
});

backgroundBlack.addEventListener("click", function() {
    document.getElementsByClassName("blue-background");
});

const BlueBackgroundbody = function() {
    const backgroundRed = document.getElementById("changeBackground");
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("changeBackground");
    changeColorButton.addEventListener("click", function() {
        BlueBackgroundbody();
    });
};