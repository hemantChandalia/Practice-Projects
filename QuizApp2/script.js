const questions = [
    {
        questions: "Which animal is known as the 'Ship of the Desert'",
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





// async function callAPI() {
//     const url = 'https://api.api-ninjas.com/v1/trivia?category=mathematics&limit=30';

//     let fetchData = {
//         method: 'GET',
//         url: url,
//         headers: { 'X-Api-Key': 'NxBXOQxGVIihqkAHwTWTFQ==UbCX3quuKg19Lb0F'},
//         contentType: 'application/json',
//     }

//     await fetch(url, fetchData)
//         .then((response) => {
//             return response.json()
//         }).
//         then((data) => {
//             console.log("api response >>>>> success", data)
//         })
//         .catch(function (error) {
//             console.log("api response >>>>> error", error)
//         });
// }

// callAPI()



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const skipButton = document.getElementById("skip-btn");
const smtButton = document.getElementById("smt-btn");
const plyButton = document.getElementById("ply-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    prevButton.innerHTML = "Prev";
    skipButton.innerHTML = "Skip";
    smtButton.innerHTML = "Submit";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    // nextButton.style.display = "none";
    plyButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // var selectAnswer = localStorage.getItem("selectedBtn");
    // nextButton.style.display = "block";

// function saveSelectedText() {
//     let selectedText = 'selectedBtn';

//     if (window.getSelection) {
//       selectedText = window.getSelection().toString();
//     } else if (document.selection && document.selection.type !== 'Control') {
//       selectedText = document.selection.createRange().text;
//     }

//     // Do something with the selected text, like displaying it or storing it
//     console.log('Selected Text:', selectedText);

//     // You can also store it in a variable or use it in any other way
//     // For example, to store it in a variable:
//     // savedText = selectedText;
//   }


/* {<select id="mySelect">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
</select>
<button onclick="saveSelectedOption()">Save Selected Option</button> */}

function saveSelectedButton() {
    // Get the <select> element
    var selectElement = document.getElementById('answer-buttons');

    // Get the selected option
    var selectedButton = selectElement.button[selectElement.selectedIndex];

    // Get the value and text of the selected option
    var selectedValue = selectedButton.value;
    var selectedText = selectedButton.text;

    // You can do something with the selected value or text, such as storing it
    console.log('Selected Value:', selectedValue);
    console.log('Selected Text:', selectedText);

    // You can store the selected value in a variable or use it as needed
    // For example, to store it in a variable:
    // savedOption = selectedValue;
}


// document.addEventListener('mouseup', function() {
//     saveSelectedText();
//   });

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    plyButton.innerHTML = "Play Again";
    plyButton.style.display = "block";
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    skipButton.style.display = "none";
    smtButton.style.display = "none";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function handlePrevButton() {
    currentQuestionIndex--;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
        prevButton.style.display = "none";
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }

})

prevButton.addEventListener("click", () => {
    if (currentQuestionIndex < 0) {
        handlePrevButton();

    } else {
        startQuiz();
    }

})


skipButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }

})

smtButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showScore();
    }

})

plyButton.addEventListener("click", () => {
    plyButton.style.display = "none";
    nextButton.style.display = "unset";
    prevButton.style.display = "unset";
    skipButton.style.display = "unset";
    smtButton.style.display = "unset";
    startQuiz();

})

startQuiz();

