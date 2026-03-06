let timeLeft = 15;
let timerId;
let currentQuestionIndex = 0;
let score = 0;

// Sample Quiz Logic
function startTimer() {
    timeLeft = 15;
    document.getElementById('timer').innerText = timeLeft + "s";
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(timerId);
            nextQuestion(); 
        }
    }, 1000);
}

window.startQuiz = function() {
    const name = document.getElementById('p-name').value;
    if(!name) return alert("Please enter name");
    document.getElementById('quiz-login').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    loadQuestion();
};

function loadQuestion() {
    // Logic to fetch from Firebase and display
    startTimer();
}
