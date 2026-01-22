let aantal = 0;
let waarschuwing = document.getElementById("waarschuwing")

function plus() {
  aantal = aantal + 1; // of: teller++;
  console.log(aantal);
  document.getElementById("aantal").innerHTML = aantal;

  if ( aantal === 3) {
  waarschuwing.innerHTML = 'Dat zijn er best veel…';
  waarschuwing.style.color = "green";
}
else if (aantal >= 5){
  waarschuwing.innerHTML = 'Pauze? Water is ook lekker';
  waarschuwing.style.color = "red";
}
}

function min() {
  if (aantal > 0){
  aantal = aantal - 1;}
  console.log(aantal);
  document.getElementById("aantal").innerHTML = aantal;
}

function reset() {
    aantal = 0;
    console.log(aantal);
    document.getElementById("aantal").innerHTML = aantal;
    waarschuwing.innerHTML = "";
}

