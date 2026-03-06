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

alert("Admin Mode Activated");

isAdmin = true;

document.getElementById("adminPanel").style.display = "block";

}else{

alert("Wrong Password");

}

}


// --------------------
// EDIT HOMEPAGE TEXT
// --------------------
function updateHome(){

if(!isAdmin){
alert("Admin login required");
return;
}

let text = document.getElementById("homeTextInput").value;

document.getElementById("homeText").innerText = text;

localStorage.setItem("homeText", text);

alert("Homepage Updated");

}


// --------------------
// LOAD HOMEPAGE TEXT
// --------------------
window.onload = function(){

let saved = localStorage.getItem("homeText");

if(saved){
document.getElementById("homeText").innerText = saved;
}

loadLeaderboard();

}



// --------------------
// ADD EVENT
// --------------------
function addEvent(){

let event = document.getElementById("eventInput").value;

let events = JSON.parse(localStorage.getItem("events")) || [];

events.push(event);

localStorage.setItem("events",JSON.stringify(events));

showEvents();

}


// --------------------
// SHOW EVENTS
// --------------------
function showEvents(){

let events = JSON.parse(localStorage.getItem("events")) || [];

let html = "";

events.forEach(e=>{
html += "<li>"+e+"</li>";
});

document.getElementById("eventList").innerHTML = html;

}


// --------------------
// ADD QUIZ QUESTION
// --------------------
function addQuestion(){

let q = document.getElementById("q").value;
let o1 = document.getElementById("o1").value;
let o2 = document.getElementById("o2").value;
let o3 = document.getElementById("o3").value;
let o4 = document.getElementById("o4").value;
let ans = document.getElementById("ans").value;

let questions = JSON.parse(localStorage.getItem("quizQuestions")) || [];

questions.push({
question:q,
options:[o1,o2,o3,o4],
answer:ans
});

localStorage.setItem("quizQuestions",JSON.stringify(questions));

alert("Question Added");

}



// --------------------
// QUIZ SYSTEM
// --------------------
let questions = [];
let current = 0;
let score = 0;


function startQuiz(){

let name = document.getElementById("playerName").value;

if(name===""){
alert("Enter your name");
return;
}

questions = JSON.parse(localStorage.getItem("quizQuestions")) || [];

current = 0;
score = 0;

show("quiz");

loadQuestion();

}



function loadQuestion(){

if(current >= questions.length){
finishQuiz();
return;
}

let q = questions[current];

document.getElementById("q").innerText = q.question;

let html="";

q.options.forEach(opt=>{

html += `<button onclick="answer('${opt}')">${opt}</button><br><br>`;

});

document.getElementById("options").innerHTML = html;

}



function answer(opt){

if(opt === questions[current].answer){
score++;
}

current++;

loadQuestion();

}



function finishQuiz(){

alert("Your Score: "+score);

saveScore();

show("leaderboard");

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
// LEADERBOARD
// --------------------
function loadLeaderboard(){

let scores = JSON.parse(localStorage.getItem("scores")) || [];

let html="";

scores.forEach(s=>{
html += `<p>${s.name} : ${s.score}</p>`;
});

document.getElementById("scores").innerHTML = html;

}



// --------------------
// RESET LEADERBOARD
// --------------------
function resetLeaderboard(){

localStorage.removeItem("scores");

alert("Leaderboard Reset");

loadLeaderboard();

}



// --------------------
// PAGE NAVIGATION
// --------------------
function show(id){

let sections = document.querySelectorAll("section");

sections.forEach(sec=>{
sec.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}
