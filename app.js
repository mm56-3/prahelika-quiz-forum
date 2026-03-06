// Admin Password
const adminPassword = "prahelika123";

function loginAdmin(){
const pass = document.getElementById("adminPass").value;

if(pass === adminPassword){
alert("Admin Login Successful");

document.getElementById("adminPanel").style.display="block";

}else{
alert("Incorrect Password");
}
}

// Quiz Data
let questions = [];
let currentQuestion = 0;
let score = 0;

// Start Quiz
function startQuiz() {
    const name = document.getElementById("username").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    alert("Quiz Started!");
}

// Submit Answer
function submitAnswer() {
    alert("Answer submitted!");
}

// Reset Leaderboard
function resetLeaderboard() {
    alert("Leaderboard reset!");
}
