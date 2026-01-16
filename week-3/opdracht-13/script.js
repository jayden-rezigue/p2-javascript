let leeftijdText = document.getElementById ("leeftijdText");
let leeftijd = Number (
  prompt("wat is uw leeftijd?")
);

if (leeftijd < 18) {
  leeftijdText.innerHTML = "Je mag hier nog niet naar binnen!";
  leeftijdText.style.color = "red";

} else if(leeftijd >= 18 && leeftijd < 65){

  leeftijdText.innerHTML = "Welkom, volwassen bezoeker!";
  leeftijdText.style.color = "green";
}  
else {
  leeftijdText.innerHTML = "Welkom, senior bezoeker!";
  leeftijdText.style.color = "green";
}
