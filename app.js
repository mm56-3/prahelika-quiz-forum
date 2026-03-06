// --------------------
// ADMIN PASSWORD
// --------------------
const adminPassword = "prahelika123";
let isAdmin = false;


// --------------------
// ADMIN LOGIN
// --------------------
function loginAdmin(){

let pass = document.getElementById("adminPass").value;

if(pass === adminPassword){

alert("Admin Login Successful");

isAdmin = true;

document.getElementById("adminPanel").style.display = "block";

}else{

alert("Incorrect Password");

}

}


// --------------------
// ADD QUESTION (UNLIMITED)
// --------------------
function addQuestion(){

if(!isAdmin){
alert("Admin login required");
return;
}

let question = document.getElementById("q").value;
let o1 = document.getElementById("o1").value;
let o2 = document.getElementById("o2").value;
let o3 = document.getElementById("o3").value;
let o4 = document.getElementById("o4").value;
let ans = document.getElementById("ans").value;

let questions = JSON.parse(localStorage.getItem("quizQuestions")) || [];

questions.push({
q: question,
options: [o1,o2,o3,o4],
answer: ans
});

localStorage.setItem("quizQuestions", JSON.stringify(questions));

alert("Question Added Successfully");

// clear input fields
document.getElementById("q").value="";
document.getElementById("o1").value="";
document.getElementById("o2").value="";
document.getElementById("o3").value="";
document.getElementById("o4").value="";
document.getElementById("ans").value="";

}


// --------------------
// QUIZ SYSTEM
// --------------------
let questions = JSON.parse(localStorage.getItem("quizQuestions")) || [];

let currentQuestion = 0;
let score = 0;


// --------------------
// START QUIZ
// --------------------
function startQuiz(){

let name = document.getElementById("playerName").value;

if(name === ""){
alert("Please enter your name");
return;
}

currentQuestion = 0;
score = 0;

show("quiz");

loadQuestion();

}


// --------------------
// LOAD QUESTION
// --------------------
function loadQuestion(){

if(currentQuestion >= questions.length){

finishQuiz();
return;

}

let q = questions[currentQuestion];

document.getElementById("q").innerText = q.q;

let optionsHTML = "";

q.options.forEach(opt => {

optionsHTML += `<button onclick="answer('${opt}')">${opt}</button><br><br>`;

});

document.getElementById("options").innerHTML = optionsHTML;

}


// --------------------
// ANSWER
// --------------------
function answer(selected){

let q = questions[currentQuestion];

if(selected === q.answer){

score++;

}

currentQuestion++;

loadQuestion();

}


// --------------------
// FINISH QUIZ
// --------------------
function finishQuiz(){

alert("Quiz Finished! Score: " + score);

saveScore();

show("leaderboard");

loadLeaderboard();

}


// --------------------
// SAVE SCORE
// --------------------
function saveScore(){

let name = document.getElementById("playerName").value;

let scores = JSON.parse(localStorage.getItem("scores")) || [];

scores.push({
name:name,
score:score
});

localStorage.setItem("scores",JSON.stringify(scores));

}


// --------------------
// LOAD LEADERBOARD
// --------------------
function loadLeaderboard(){

let scores = JSON.parse(localStorage.getItem("scores")) || [];

let html = "";

scores.forEach(s => {

html += `<p>${s.name} - ${s.score}</p>`;

});

document.getElementById("scores").innerHTML = html;

}


// --------------------
// PAGE NAVIGATION
// --------------------
function show(section){

let sections = document.querySelectorAll("section");

sections.forEach(sec=>{
sec.classList.remove("active");
});

document.getElementById(section).classList.add("active");

if(section==="leaderboard"){
loadLeaderboard();
}

}
