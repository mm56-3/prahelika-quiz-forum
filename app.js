let userAnswers = [];let timeLeft = 15;
let timer;<div id="quiz-container">
  <h2 id="question"></h2>
  <div id="options"></div>
</div>

<script>
  loadQuestion();
</script>function checkAnswer(selected) {
  if (selected === quizQuestions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
`<h2>${player}, Your Score: ${score}/${quizQuestions.length}</h2>`;
  }
}let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizQuestions[currentQuestion];

  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}// Quiz Questions Database
const quizQuestions = [
  {
    question: "What is the SI unit of electric resistance?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Ohm"
  },
  {
    question: "Who discovered the Raman Effect?",
    options: [
      "Isaac Newton",
      "C. V. Raman",
      "Albert Einstein",
      "Nikola Tesla"
    ],
    answer: "C. V. Raman"
  },
  {
    question: "Which gas is essential for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  }
];function show(id){
document.querySelectorAll("section")
.forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

let quiz=JSON.parse(localStorage.getItem("quiz"))||[];
let i=0,score=0;

function addQ(){
quiz.push({
q:question.value,
A:A.value,
B:B.value,
C:C.value,
D:D.value,
ans:ans.value.toUpperCase()
nextQuestion();
});
localStorage.setItem("quiz",JSON.stringify(quiz));
alert("Question Added");
}
clearInterval(timer);
function load(){
if(!quiz.length)return;
q.innerText=quiz[i].q;

options.innerHTML="";
["A","B","C","D"].forEach(o=>{
options.innerHTML+=
`<button onclick="check('${o}')">
${o}. ${quiz[i][o]}
</button><br><br>`;
});
}
userAnswers.push({
  question: quizQuestions[currentQuestion].question,
  selected: selectedOption,
  correct: quizQuestions[currentQuestion].answer
});
function check(o){
if(o===quiz[i].ans)score++;
}

function next(){
i++;
if(i<quiz.length)load();
else finish();
}

function finish(){
let mobile=prompt("Enter Mobile");
let results=
JSON.parse(localStorage.getItem("results"))||[];

results.push({mobile,score});
resultHTML += `
<button onclick="downloadCertificate()">
Download Certificate
</button>
`;
localStorage.setItem("results",
JSON.stringify(results));

show("leaderboard");
display();
}

function display(){
let r=JSON.parse(localStorage.getItem("results"))||[];
scores.innerHTML=r
.sort((a,b)=>b.score-a.score)
.map(x=>`${x.mobile} : ${x.score}`)
.join("<br>");
}

load();
display();
let player = "";
function startTimer() {

  timeLeft = 15;
  document.getElementById("timer").textContent = timeLeft;

  timer = setInterval(() => {

    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if(timeLeft === 0){
      clearInterval(timer);
      nextQuestion();
    }

  },1000);
}
function startQuiz() {
  player = document.getElementById("playerName").value;
clearInterval(timer);
startTimer();
  if(player === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  loadQuestion();
}
let player = "";

function startQuiz() {
  player = document.getElementById("playerName").value;

  if(player === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  loadQuestion();
}
function saveScore() {

  let leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  leaderboard.push({
    name: player,
    score: score
  });

  leaderboard.sort((a, b) => b.score - a.score);

  localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
  );

  showLeaderboard();
}
function showLeaderboard() {

  let leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  let list = document.getElementById("leaderboard");
  list.innerHTML = "";

  leaderboard.slice(0,10).forEach(user => {
    let li = document.createElement("li");
    li.textContent =
      `${user.name} - ${user.score}`;
    list.appendChild(li);
  });
}
saveScore();
function showResult(){

let resultHTML = `<h2>${player}, Your Score: ${score}/${quizQuestions.length}</h2>`;

userAnswers.forEach(q => {

resultHTML += `
<p>
<b>Q:</b> ${q.question}<br>
Your Answer: ${q.selected}<br>
Correct Answer: ${q.correct}
</p><hr>
`;

});

document.getElementById("quiz-container").innerHTML = resultHTML;

saveScore();
}
showResult();
function loginAdmin(){

let pass =
document.getElementById("adminPass").value;

if(pass === "prahelika123"){
document.getElementById("adminPanel").style.display="block";
}else{
alert("Wrong Password");
}
}
function addQuestion(){

let newQ = {
question: document.getElementById("q").value,
options: [
document.getElementById("o1").value,
document.getElementById("o2").value,
document.getElementById("o3").value,
document.getElementById("o4").value
],
answer: document.getElementById("ans").value
};

quizQuestions.push(newQ);

alert("Question Added Successfully!");

}
function downloadCertificate(){

let canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;

let ctx = canvas.getContext("2d");

/* Background */
ctx.fillStyle = "#f5f5dc";
ctx.fillRect(0,0,800,600);

/* Title */
ctx.fillStyle = "#000";
ctx.font = "40px Arial";
ctx.fillText("Certificate of Participation",120,120);

/* Organization */
ctx.font = "25px Arial";
ctx.fillText("Prahelika Quiz Forum Darrang",180,180);

/* Name */
ctx.font = "30px Arial";
ctx.fillText(player,300,260);

/* Text */
ctx.font = "22px Arial";
ctx.fillText(
"has successfully participated in Daily Quiz",
140,320
);

/* Score */
ctx.fillText(
"Score: "+score+"/"+quizQuestions.length,
300,380
);

/* Date */
let date = new Date().toLocaleDateString();
ctx.fillText("Date: "+date,320,450);

/* Download */
let link = document.createElement("a");
link.download = "certificate.png";
link.href = canvas.toDataURL();
link.click();
}
