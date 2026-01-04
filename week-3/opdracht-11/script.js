let budget = 100;
let product = 60;

function maakRood() {
  document.getElementById("tekst").style.color = "red";
}

function maakGroen() {
  document.getElementById("tekst").style.color = "green";
}

if (budget => product) {
  document.getElementById("budget").textContent = "U heeft genoeg geld!";
  document.getElementById("budget").style.color = "green";
} else {
  document.getElementById("budget").textContent = "Helaas, te weinig geld";
  document.getElementById("budget").style.color = "red"
}