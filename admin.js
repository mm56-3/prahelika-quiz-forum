function addQuestion(){
const adminUsername = "mynewadmin";
const adminPassword = "mypassword123";
let questions =
JSON.parse(localStorage.getItem("quizQuestions")) || [];

questions.push({
question:q.value,
options:[o1.value,o2.value,o3.value,o4.value],
answer:ans.value
});

localStorage.setItem(
"quizQuestions",
JSON.stringify(questions)
);

alert("Question Added!");
}

function resetBoard(){
localStorage.removeItem("leaderboard");
alert("Leaderboard Reset");
}

function loadPlayers(){

let leaderboard =
JSON.parse(localStorage.getItem("leaderboard")) || [];

let list=document.getElementById("players");

leaderboard.forEach(p=>{
let li=document.createElement("li");
li.textContent=p.name+" - "+p.score;
list.appendChild(li);
});
}

loadPlayers();
