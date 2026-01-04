const scoreboard = document.getElementById("scoreboard");
const box = document.getElementById("box");
const options = document.querySelectorAll(".quiz-option");
const Start = document.getElementById("Btn1");
const Reset = document.getElementById("Btn2");
const Submit = document.getElementById("Btn3");


let currentQuestion = 0;
let score = 0;
let selectedOption = null;

Start.addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    selectedOption = null;

    document.getElementById("score").innerText = "Score:" + score;
    document.getElementById("qNo").innerText = "Question: 1/5";

    document.getElementById("question").innerText = "What is HTML?";

    options.forEach((btn) => {
        btn.classList.remove("selected");
        btn.innerText = "Option";
    });

    console.log("Quiz Started");
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach(o => o.classList.remove("selected"));

        option.classList.add("selected");
        selectedOption = option.innerText;
    });
});


Submit.addEventListener("click", () => {

    if (!selectedOption) {
        alert("Please select an option first!");
        return;
    }

    const correctAnswer = "Hyper Text Markup Language";

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").innerText = "Score: " + score;
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }

    currentQuestion++;
    document.getElementById("qNo").innerText = "Question: " + (currentQuestion + 1) + "/5";

    selectedOption = null;
    options.forEach(o => o.classList.remove("selected"));
});
