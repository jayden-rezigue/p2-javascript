let aantal = 0;

function plus() {
  aantal = aantal + 1;
  console.log(aantal);
  document.getElementById("aantal").innerText = aantal;

  if (aantal >= 5) {
  document.getElementById("message").innerText =
  "Dat begint ergens op te lijken 😋";
  document.getElementById("message").style.color = "orange";
}
if (aantal >= 10) {
  document.getElementById("message").innerText =
  "misschien een pauze nemen";
  document.getElementById("message").style.color = "red";
}
}

function reset() {
  aantal = 0;
  document.getElementById("title").innerHTML = "0 pizza!";
  document.getElementById("message").innerText = "";
}

