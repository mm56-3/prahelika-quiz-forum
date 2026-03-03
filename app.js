function show(id){
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
