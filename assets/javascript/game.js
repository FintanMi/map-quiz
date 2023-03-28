const answerElement = Array.from(document.getElementsByClassName('choice-text'));
const questionElement = document.getElementById('question');
const progress = document.getElementById('progressText');
const correctScore = document.getElementById('scores');
const wrongScore = document.getElementById('incorrect');
const progressLine = document.getElementById('progress');

let currentQuestion = {};
let acceptAns = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

// Add quiz questions and answers
const quizData = [
    {
        question: "What county is known as the 'Rebel County'?",
        choice1: "Dublin",
        choice2: "Waterford",
        choice3: "Carlow",
        choice4: "Cork",
        correct: 4
    },
    {
        question: "What county is known as the 'Kingdom'?",
        choice1: "Kildare",
        choice2: "Sligo",
        choice3: "Kerry",
        choice4: "Antrim",
        correct: 3
    },
    {
        question: "What county is known as the 'Banner County'?",
        choice1: "Clare",
        choice2: "Tyrone",
        choice3: "Offaly",
        choice4: "Meath",
        correct: 1
    },
    {
        question: "What county is known as the 'Dolmen County'?",
        choice1: "Carlow",
        choice2: "Down",
        choice3: "Galway",
        choice4: "Mayo",
        correct: 1
    },
    {
        question: "What county is known as the 'Breifne/Brefni County'?",
        choice1: "Carlow",
        choice2: "Cavan",
        choice3: "Dublin",
        choice4: "Cork",
        correct: 2
    },
    {
        question: "What county is known as the 'Marble County'?",
        choice1: "Fermanagh",
        choice2: "Leitrim",
        choice3: "Kilkenny",
        choice4: "Louth",
        correct: 3
    },
    {
        question: "What county is known as the 'Wee County'?",
        choice1: "West Meath",
        choice2: "Longford",
        choice3: "Wexford",
        choice4: "Louth",
        correct: 4
    },
    {
        question: "What county is known as the 'Treaty County'?",
        choice1: "Sligo",
        choice2: "Limerick",
        choice3: "Wicklow",
        choice4: "Monaghan",
        correct: 2
    },
    {
        question: "What county is known as the 'Royal County'?",
        choice1: "Meath",
        choice2: "West Meath",
        choice3: "Donegal",
        choice4: "Wexford",
        correct: 1
    },
    {
        question: "What county is known as the 'Yeats County'?",
        choice1: "Derry",
        choice2: "Roscommon",
        choice3: "Sligo",
        choice4: "Kildare",
        correct: 3
    }
];

const correctBonus = 10;
const maxQuestions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...quizData];
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestion.length === 0 || questionCounter > maxQuestions){
        localStorage.setItem('recentScore', score);
        // go to last page
        return window.location.assign('/finish.html');
    }

    questionCounter++;
    progress.innerText = `Question ${questionCounter}/${maxQuestions}`;
    progressLine.style.width = `${(questionCounter/maxQuestions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    answerElement.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestion.splice(questionIndex, 1);

    acceptAns = true;
};

answerElement.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptAns) return;

        acceptAns = false;
        const selectedChoice = e.target;
        const selectedAns = selectedChoice.dataset['number'];

        const answerColour = selectedAns == currentQuestion.correct ? 'correctans' : 'incorrectans';

        if (answerColour === 'correctans'){
            updateScore(correctBonus);
        }
        
        selectedChoice.parentElement.classList.add(answerColour);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(answerColour);
            getNewQuestion();
        }, 500);
    });
});

updateScore = num => {
    score += num;
    correctScore.innerText = score;
};

startGame();

const finalScore = document.getElementById('final-score');
const recentScore = localStorage.getItem('recentScore');
finalScore.innerText = recentScore;