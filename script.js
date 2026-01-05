const scoreboard = document.getElementById("scoreboard");
const box = document.getElementById("box");
const options = document.querySelectorAll(".quiz-option");
const Start = document.getElementById("Btn1");
const Reset = document.getElementById("Btn2");
const Submit = document.getElementById("Btn3");


let currentQuestion = 0;
let score = 0;
let selectedOption = null;

 const questions = [
        {
            question: "What is HTML?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "What is CSS?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets",
                "Computer Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "What is JavaScript?",
            options: [
                "A programming language",
                "A markup language",
                "A database",
                "A browser"
            ],
            answer: "A programming language"
        }
    ];

Start.addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    selectedOption = null;


    document.getElementById("score").innerText = "Score:" + score;
    document.getElementById("qNo").innerText = "Question: 1/" + questions.length;

    document.getElementById("question").innerText = questions[currentQuestion].question;

    options.forEach((btn, index) => {
        btn.classList.remove("selected");
        btn.innerText = questions[currentQuestion].options[index];
    });

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

    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").innerText = "Score: " + score;
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("qNo").innerText = "Question: " + (currentQuestion + 1) + "/" + questions.length;
        document.getElementById("question").innerText = questions[currentQuestion].question;

        options.forEach((btn, index) => {
            btn.classList.remove("selected");
            btn.innerText = questions[currentQuestion].options[index];
        });

        selectedOption = null;
    } else {
        alert("Quiz Finished \nFinal Score: " + score);
    }
    
   
   
});
