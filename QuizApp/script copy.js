const questions = [
    {
        questions: "Which animal is known as the 'Ship of the Desert",
        answers: [
            { text: "Camel", correct: true },
            { text: "Shark", correct: false },
            { text: "Dog", correct: false },
            { text: "Horse", correct: false },
        ]
    },
    {
        questions: "How many days are there in a week?",
        answers: [
            { text: "30 days", correct: false },
            { text: "7 days", correct: true },
            { text: "15 days", correct: false },
            { text: "5 days", correct: false },
        ]
    },
    {
        questions: "How many letters are there in the English alphabet?",
        answers: [
            { text: "26 letters", correct: true },
            { text: "25 letters", correct: false },
            { text: "21 letters", correct: false },
            { text: "29 letters", correct: false },
        ]
    },
    {
        questions: "Rainbow consist of how many colours?",
        answers: [
            { text: "4 colours", correct: false },
            { text: "9 colours", correct: false },
            { text: "7 colours", correct: true },
            { text: "11 colours", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", function (e) {
    GotoNext(e)
});
let currentQuestionIndex = 0;
let score = 0;

// function to start Quiz
function startQuiz() {
    nextButton.innerHTML = "Next";
    showQuestion(currentQuestionIndex);
}

function GotoNext() {
    currentQuestionIndex = currentQuestionIndex + 1;
    nextButton.innerHTML = "Next";
    showQuestion(currentQuestionIndex);
}

function showQuestion(currentQuestionIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        let isCorrect = answer.correct
        button.classList.add("btn");
        button.setAttribute("id",index);
        // if you need to pass param in onclick event handler
        // then you have to use callback function
        button.addEventListener("click", function (e) {
            checkForCorrectAnswer(e, isCorrect, currentQuestion.answers)
        });
        answerButton.appendChild(button);

    });
}

function checkForCorrectAnswer(event, isCorrect, answers) {
    console.log("checkForCorrectAnswer >>>>", event.target.innerHTML, "-----", isCorrect)
    if (isCorrect == true) {
        event.target.classList.add("correct-answer");
    } else {
        event.target.classList.add("wrong-answer");
        validateSelection(answers)
    }


}

function validateSelection(answers) {
    answers.forEach((answer, index) => {
        if (answer.correct == true) {
            document.getElementById(index).classList.add("correct-answer");
        }
    });
}

startQuiz();


