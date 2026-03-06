import { db } from './firebase.js';
import { collection, getDocs, addDoc, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let questions = [];
let currentIndex = 0;
let timer;
let score = 0;

// Show Login Modal
window.showLogin = () => {
    document.getElementById('quiz-overlay').classList.remove('hidden');
};

// Start Quiz Logic
window.initiateQuiz = async () => {
    const name = document.getElementById('username').value;
    if(!name) return alert("Enter your name!");
    
    document.getElementById('login-card').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Fetch Questions from Firebase
    const qSnap = await getDocs(collection(db, "questions"));
    questions = qSnap.docs.map(doc => doc.data());
    
    loadQuestion();
};

function loadQuestion() {
    if(currentIndex >= questions.length) return endQuiz();
    
    const q = questions[currentIndex];
    document.getElementById('question-text').innerText = q.text;
    const optionsDiv = document.getElementById('options-grid');
    optionsDiv.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, q.correct);
        optionsDiv.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    let timeLeft = 15;
    const bar = document.getElementById('timer-bar');
    clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-text').innerText = timeLeft + "s";
        bar.style.width = (timeLeft / 15 * 100) + "%";
        
        if(timeLeft <= 0) {
            currentIndex++;
            loadQuestion();
        }
    }, 1000);
}

// End Quiz & Save to Firebase
async function endQuiz() {
    const name = document.getElementById('username').value;
    await addDoc(collection(db, "leaderboard"), {
        name: name,
        score: score,
        date: new Date()
    });
    alert(`Quiz Finished! Your score: ${score}`);
    location.reload();
}
