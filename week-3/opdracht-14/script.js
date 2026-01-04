const txt = document.getElementById("txt");

let keuzeDrank = prompt("wat wilt u drinken? “cola”, “water” of “koffie”");

if(keuzeDrank === "cola" ){
txt.innerHTML = "“Je krijgt een blikje cola 🥤”";
txt.style.color = "red";
}

else if (keuzeDrank === "water" ){
txt.innerHTML = "“Goed bezig, lekker gezond 💧”";
txt.style.color = "lightblue";
}

else if (keuzeDrank === "koffie" ){
txt.innerHTML = "“Energie incoming ☕”";
txt.style.color = "brown";
}

else {
txt.innerHTML = "“Sorry, dat hebben we niet”";
}