// Add quiz questions and answers
const quizData = [
    {
        question: "What county is known as the 'Rebel County'?",
        a: "Dublin",
        b: "Waterford",
        c: "Carlow",
        d: "Cork",
        correct: "d",
    },
    {
        question: "What county is known as the 'Kingdom'?",
        a: "Kildare",
        b: "Sligo",
        c: "Kerry",
        d: "Antrim",
        correct: "c",
    },
    {
        question: "What county is known as the 'Banner County'?",
        a: "Clare",
        b: "Tyrone",
        c: "Offaly",
        d: "Meath",
        correct: "a",
    },
    {
        question: "What county is known as the 'Dolmen County'?",
        a: "Carlow",
        b: "Down",
        c: "Galway",
        d: "Mayo",
        correct: "a",
    }
];

// bring in questions, answers and submit button
const quiz = document.getElementById('quiz')
const answerElement = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_question')
const b_text = document.getElementById('b_question')
const c_text = document.getElementById('c_question')
const d_text = document.getElementById('d_question')
const submitBtn = document.getElementById('submit')

// create variable that starts at first quiz and initialise scores to zero
let currentQuiz = 0
let score = 0

// get current quiz data
loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// deselect question before moving onto next question
function deselectAnswers() {
    answerElement.forEach(answerElement => answerElement.checked = false)
}

function getSelected() {
    let answer

    answerElement.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id
        }
    })

    return answer
}

// check answer, increment score and go to next question
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
            incrementScore();
        } else {
            incrementwrongAnswer();
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}
                /${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})



/**
 * Gets the current score from the DOM & increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the number of wrong answers from the DOM & increments it by 1
 */
function incrementwrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}