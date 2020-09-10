function openSlideMenu() {
    document.getElementById("side-menu").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function changeColorbyUser() {
    var colorByUser = document.getElementById("colorpicker").value;
    document.body.style.backgroundColor = colorByUser;
}

const getRedColor = document.getElementById("red");
const getBlueColor = document.getElementById("blue");
const getOrangeColor = document.getElementById("orange");
const getGrayColor = document.getElementById("gray");
const getYellowColor = document.getElementById("yellow");

getRedColor.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
})

getBlueColor.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
})

getOrangeColor.addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange';
})
getGrayColor.addEventListener('click', function() {
    document.body.style.backgroundColor = 'gray';
})
getYellowColor.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
})

// // Maak een Array functie
// var colors = [getRedColor, getBlueColor, getOrangeColor, getGrayColor, getYellowColor];

// function changeColorRed() {
//     document.body.style.backgroundColor = "red";
// }

// function changeColorBlue() {
//     document.body.style.backgroundColor = "blue";
// }

// function changeColorOrange() {
//     document.body.style.backgroundColor = "orange";
// }

// function changeColorGray() {
//     document.body.style.backgroundColor = "gray";
// }

// function changeColorYellow() {
//     document.body.style.backgroundColor = "yellow";
// }

// // functie kleur
// var color = document.querySelector("colorpicker").value;
// console.log(color);

// // functie achtergrond
// document.body.style.backgroundColor = color;