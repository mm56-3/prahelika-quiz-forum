// Admin password
const adminPassword = "prahelika123";

function loginAdmin() {
    let pass = document.getElementById("adminPassword").value;

    if (pass === adminPassword) {
        alert("Admin Login Successful");
        window.location.href = "admin.html";
    } else {
        alert("Wrong Password");
    }
}

// Quiz system
let score = 0;

function startQuiz() {
    alert("Quiz Started!");
}

function submitAnswer() {
    alert("Answer Submitted!");
}

// Leaderboard reset
function resetLeaderboard() {
    alert("Leaderboard Reset!");
}
