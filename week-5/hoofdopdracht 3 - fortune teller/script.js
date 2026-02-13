const uitkomst = ["maybe","of course","defintly not","you can only wait","i would think so","take your time with it","from what i heard no","it wil happen faster than you think","sure why not","you already know the answer"];

const question = document.getElementById("question");
const fortune = document.getElementById("fortune");
const notification = document.getElementById("notification");
const start = document.getElementById("start");
const results = document.getElementById("results");

const showQuestion = document.getElementById("showQuestion");
const showAnswer = document.getElementById("showAnswer");
const backBtn = document.getElementById("backBtn");
fortune.addEventListener("click", function(){
if (question.value === ""){
    notification.textContext = "first fill in a question";
} else {
    notification.textContext = "";

    const randomNummer = Math.floor(Math.random() * uitkomst.length);
    const gekozenAntwoord = uitkomst[randomNummer];

    showQuestion.textContext = "je vraag: " + question.value;
    showAnswer.textContext = "uitkomst: " + gekozenAntwoord;
    start.style.display = "none";
    results.style.display = "block";
}
});

backBtn.addEventListener("click", function(){
    question.value = "";
    results.style.display = "none";
    start.style.display = "block";
});