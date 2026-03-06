// ---------- SECTION NAVIGATION ----------

function show(section){

let sections = document.querySelectorAll("section")

sections.forEach(function(sec){
sec.style.display="none"
})

let active=document.getElementById(section)

if(active){
active.style.display="block"
}

}


// ---------- ADMIN LOGIN ----------

function adminLogin(){

let user=document.getElementById("adminUser")
let pass=document.getElementById("adminPass")
let dash=document.getElementById("dashboard")

if(!user || !pass) return

if(user.value==="VIKRAM784125" && pass.value==="#UDSB784125781005"){

dash.style.display="block"

alert("Admin Login Successful")

}else{

alert("Wrong username or password")

}

}


// ---------- QUIZ SYSTEM ----------

let questions=[]
let currentQuestion=0
let score=0


function startQuiz(){

let name=document.getElementById("playerName")
let phone=document.getElementById("playerPhone")

if(!name || !phone){

alert("Enter name and phone")

return

}

show("quiz")

currentQuestion=0
score=0

loadQuestion()

}


function loadQuestion(){

let q=document.getElementById("q")
let options=document.getElementById("options")

if(!q || !options) return

if(currentQuestion>=questions.length){

finishQuiz()
return

}

let question=questions[currentQuestion]

q.innerText=question.q

options.innerHTML=""

let opts=["a","b","c","d"]

opts.forEach(function(opt){

let btn=document.createElement("button")

btn.innerText=question[opt]

btn.onclick=function(){

checkAnswer(opt)

}

options.appendChild(btn)

})

}


function checkAnswer(answer){

if(answer===questions[currentQuestion].ans){

score++

}

currentQuestion++

loadQuestion()

}


function finishQuiz(){

alert("Quiz Finished! Your Score: "+score)

saveScore()

show("leaderboard")

}


// ---------- LEADERBOARD ----------

function saveScore(){

let name=document.getElementById("playerName").value

let data=JSON.parse(localStorage.getItem("scores")||"[]")

data.push({name:name,score:score})

localStorage.setItem("scores",JSON.stringify(data))

renderScores()

}


function renderScores(){

let box=document.getElementById("scores")

if(!box) return

let data=JSON.parse(localStorage.getItem("scores")||"[]")

box.innerHTML=""

data.forEach(function(s){

let p=document.createElement("p")

p.innerText=s.name+" : "+s.score

box.appendChild(p)

})

}


// ---------- ADD QUIZ QUESTION ----------

function addQuestion(){

let q=document.getElementById("q")
let a=document.getElementById("a")
let b=document.getElementById("b")
let c=document.getElementById("c")
let d=document.getElementById("d")
let ans=document.getElementById("ans")

if(!q) return

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


// ---------- GALLERY ----------

let gallery=[]

function uploadGallery(){

let input=document.getElementById("galleryUpload")

if(!input) return

let file=input.files[0]

let reader=new FileReader()

reader.onload=function(){

gallery.push(reader.result)

renderGallery()

}

reader.readAsDataURL(file)

}


function renderGallery(){

let g=document.getElementById("gallerySlider")

if(!g) return

g.innerHTML=""

gallery.forEach(function(img){

let i=document.createElement("img")

i.src=img
i.className="animImg"

g.appendChild(i)

})

}


// ---------- MEMBERS ----------

let members=[]

function addMember(){

let name=document.getElementById("mname")
let role=document.getElementById("mrole")
let photo=document.getElementById("memberPhoto")

if(!name) return

let file=photo.files[0]

let reader=new FileReader()

reader.onload=function(){

members.push({

name:name.value,
role:role.value,
photo:reader.result

})

renderMembers()

}

reader.readAsDataURL(file)

}


function renderMembers(){

let box=document.getElementById("membersList")

if(!box) return

box.innerHTML=""

members.forEach(function(m){

let div=document.createElement("div")

div.className="memberCard"

div.innerHTML=`

<img src="${m.photo}" width="100">
<h3>${m.name}</h3>
<p>${m.role}</p>

`

box.appendChild(div)

})

}


// ---------- AUTO LOAD LEADERBOARD ----------

window.onload=function(){

renderScores()

}
