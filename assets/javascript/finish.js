const finalScore = document.getElementById('final-score');
const recentScore = localStorage.getItem('recentScore');
finalScore.innerText = "Your score: " + recentScore;