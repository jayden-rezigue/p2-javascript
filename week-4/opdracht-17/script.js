let box = document.getElementById("mO");

box.addEventListener("mouseover", vergrootBox);
box.addEventListener("mouseout", verkleinBox);

function vergrootBox() {
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = "purple";
  box.innerText = "nicely done";
  
}

function verkleinBox() {
  box.style.fontSize = "16px";
  box.style.backgroundColor = "yellow";
  box.innerText = "";
  box.style.width = "";
  box.style.height = "";
}