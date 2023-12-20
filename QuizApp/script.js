const questions = [
    {
        questions: "Which animal is known as the 'Ship of the Desert",
        answers:[
            {text: "Camel", correct:true},
            {text: "Shark", correct:false},
            {text: "Dog", correct:false},
            {text: "Horse", correct:false},
        ]
    },
    {
        questions: "How many days are there in a week?",
        answers:[
            {text: "30 days", correct:false},
            {text: "7 days", correct:true},
            {text: "15 days", correct:false},
            {text: "5 days", correct:false},
        ]
    },
    {
        questions: "How many letters are there in the English alphabet?",
        answers:[
            {text: "26 letters", correct:true},
            {text: "25 letters", correct:false},
            {text: "21 letters", correct:false},
            {text: "29 letters", correct:false},
        ]
    },
    {
        questions: "Rainbow consist of how many colours?",
        answers:[
            {text: "4 colours", correct:false},
            {text: "9 colours", correct:false},
            {text: "7 colours", correct:true},
            {text: "11 colours", correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    });

}

startQuiz();


