
let questions=[]
let members=[]
let gallery=[]

let score=0
let timer=60

function showSection(id){

document.querySelectorAll(".section").forEach(s=>s.style.display="none")

document.getElementById(id).style.display="block"

}

function saveParticipant(){

let name=document.getElementById("name").value

localStorage.setItem("player",name)

alert("Welcome "+name)

showSection("quiz")

loadQuiz()

}

function addQuestion(){

let q={
q:question.value,
a:a.value,
b:b.value,
c:c.value,
d:d.value,
ans:ans.value
}

questions.push(q)

alert("Question Added")

}

function loadQuiz(){

let box=document.getElementById("questionBox")

box.innerHTML=""

questions.forEach((q,i)=>{

box.innerHTML+=`

<h3>${q.q}</h3>

<input type="radio" name="q${i}" value="a">${q.a}<br>
<input type="radio" name="q${i}" value="b">${q.b}<br>
<input type="radio" name="q${i}" value="c">${q.c}<br>
<input type="radio" name="q${i}" value="d">${q.d}<br>

`

})

startTimer()

}

function startTimer(){

let interval=setInterval(()=>{

timer--

document.getElementById("timer").innerText="Timer: "+timer

if(timer==0){

clearInterval(interval)

submitQuiz()

}

},1000)

}

function submitQuiz(){

questions.forEach((q,i)=>{

let ans=document.querySelector(`input[name="q${i}"]:checked`)

if(ans && ans.value==q.ans) score++

})

saveLeaderboard()

alert("Your Score: "+score)

}

function saveLeaderboard(){

let name=localStorage.getItem("player")

let list=JSON.parse(localStorage.getItem("leaderboard")||"[]")

list.push({name,score})

localStorage.setItem("leaderboard",JSON.stringify(list))

showLeaderboard()

}

function showLeaderboard(){

let list=JSON.parse(localStorage.getItem("leaderboard")||"[]")

let ul=document.getElementById("leaderList")

ul.innerHTML=""

list.sort((a,b)=>b.score-a.score)

list.forEach(p=>{

ul.innerHTML+=`<li>${p.name} - ${p.score}</li>`

})

}

function addGallery(){

let url=document.getElementById("galleryUrl").value

gallery.push(url)

renderGallery()

}

function renderGallery(){

let g=document.getElementById("galleryBox")

g.innerHTML=""

gallery.forEach(img=>{

g.innerHTML+=`<img src="${img}">`

})

}

function addMember(){

let m={

name:mname.value,
photo:mphoto.value,
role:mrole.value

}

members.push(m)

renderMembers()

}

function renderMembers(){

let box=document.getElementById("membersList")

box.innerHTML=""

members.forEach(m=>{

box.innerHTML+=`

<div class="member-card">

<img src="${m.photo}" width="100"><br>
<b>${m.name}</b><br>
${m.role}

</div>

`

})

}

function login(){

if(user.value=="VIKRAM784125" && pass.value=="#UDSB784125781005"){

dashboard.style.display="block"

}

else{

alert("Wrong Login")

}

}

showLeaderboard()
renderMembers()
renderGallery()
