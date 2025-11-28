console.log("Hello World");

const geboorteJaar = prompt("Wat is je geboortejaar?");
const huidigeJaar = new Date().getFullYear();

let leeftijd = huidigeJaar - geboorteJaar;

let textElement = document.getElementById("leeftijd")

textElement.innerHTML = "Je bent ongeveer " + leeftijd + " jaar oud.";
console.log("Je bent ongeveer " + leeftijd + " jaar oud.");

textElement.style.color = "blue";