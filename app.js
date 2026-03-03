<div id="quiz-container">
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
      `<h2>Your Score: ${score}/${quizQuestions.length}</h2>`;
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
});
localStorage.setItem("quiz",JSON.stringify(quiz));
alert("Question Added");
}

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
