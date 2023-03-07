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

const quiz = document.getElementById('quiz')
const answerElement = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_question')
const b_text = document.getElementById('b_question')
const c_text = document.getElementById('c_question')
const d_text = document.getElementById('d_question')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

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

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}
                /${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})