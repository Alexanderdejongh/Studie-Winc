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

function changeColorRed() {
    document.body.style.backgroundColor = "red";
}

function changeColorBlue() {
    document.body.style.backgroundColor = "blue";
}

function changeColorOrange() {
    document.body.style.backgroundColor = "orange";
}

function changeColorGray() {
    document.body.style.backgroundColor = "gray";
}

function changeColorYellow() {
    document.body.style.backgroundColor = "yellow";
}