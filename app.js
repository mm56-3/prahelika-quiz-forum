let questions=[]
let gallery=[]
let achievements=[]
let members=[]
let score=0
let timer=60

function showSection(id){

document.querySelectorAll(".section").forEach(s=>s.style.display="none")
document.getElementById(id).style.display="block"

}

function startQuiz(){

let name=playerName.value
let phone=playerPhone.value

if(!name || !phone){

alert("Please enter name and phone")
return

}

localStorage.setItem("player",name)

quizArea.style.display="block"

loadQuiz()

}

function addQuestion(){

questions.push({
q:q.value,
a:a.value,
b:b.value,
c:c.value,
d:d.value,
ans:ans.value
})

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

timer.innerText="Timer: "+timer

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

alert("Score: "+score)

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

if(!ul) return

ul.innerHTML=""

list.sort((a,b)=>b.score-a.score)

list.forEach(p=>{

ul.innerHTML+=`<li>${p.name} - ${p.score}</li>`

})

}

function addGallery(){

gallery.push(galleryUrl.value)

renderGallery()

}

function renderGallery(){

let g=document.getElementById("gallerySlider")

if(!g) return

g.innerHTML=""

gallery.forEach(img=>{

g.innerHTML+=`<img src="${img}">`

})

}

function addAchievement(){

achievements.push(achUrl.value)

renderAchievements()

}

function renderAchievements(){

let g=document.getElementById("achievementSlider")

if(!g) return

g.innerHTML=""

achievements.forEach(img=>{

g.innerHTML+=`<img src="${img}">`

})

}

function addMember(){

members.push({
name:mname.value,
photo:mphoto.value,
role:mrole.value
})

renderMembers()

}

function renderMembers(){

let box=document.getElementById("membersList")

if(!box) return

box.innerHTML=""

members.forEach(m=>{

box.innerHTML+=`

<div class="member-card">

<img src="${m.photo}" width="90"><br>
<b>${m.name}</b><br>
${m.role}

</div>

`

})

}

function setLogo(){

localStorage.setItem("logo",logoUrl.value)

alert("Logo Updated")

}

function updateHome(){

localStorage.setItem("homeDesc",homeText.value)

alert("Homepage Updated")

}

function adminLogin(){

if(adminUser.value=="VIKRAM784125" && adminPass.value=="#UDSB784125781005"){

dashboard.style.display="block"

}else{

alert("Wrong Login")

}

}

showLeaderboard()
renderGallery()
renderMembers()
renderAchievements()
