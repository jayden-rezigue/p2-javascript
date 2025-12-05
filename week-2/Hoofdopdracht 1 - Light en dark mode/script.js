let textmessage = document.getElementById("titel");
let lightbutton = document.getElementById("lightButton");
let darkbutton = document.getElementById("darkButton");

function lightMode() {
    document.body.style.backgroundColor = "white";
    textmessage.innerHTML = "Goedendag ☀️";
    textmessage.style.color = "black";
    lightbutton.style.backgroundColor = "yellow";
}

function darkmode() {
    document.body.style.backgroundColor = "black";
    textmessage.innerHTML = "Goedeavond 🌙";
    textmessage.style.color = "white";
    darkbutton.style.backgroundColor = "purple";
    darkbutton.style.color = "white";
}