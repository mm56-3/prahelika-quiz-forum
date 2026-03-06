let questions=[]
let current=0
let score=0
let timer=15
let interval

function show(id){

document.querySelectorAll("section").forEach(s=>{
s.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

function startQuiz(){

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value

if(!name || !phone){
alert("Enter name and phone")
return
}

document.getElementById("login").style.display="none"
document.getElementById("quizBox").style.display="block"

current=0
score=0

showQuestion()

}

function showQuestion(){

let q=questions[current]

document.getElementById("question").innerText=q.q

let html=""

q.options.forEach(o=>{
html+=`<button onclick="answer('${o}')">${o}</button>`
})

document.getElementById("options").innerHTML=html

startTimer()

}

function answer(a){

if(a===questions[current].answer){
score++
}

}

function next(){

current++

if(current<questions.length){
showQuestion()
}else{
finish()
}

}

function startTimer(){

timer=15

document.getElementById("timer").innerText=timer

clearInterval(interval)

interval=setInterval(()=>{

timer--

document.getElementById("timer").innerText=timer

if(timer==0){
next()
}

},1000)

}

function finish(){

alert("Quiz finished. Score: "+score)

let name=document.getElementById("name").value

let scores=JSON.parse(localStorage.getItem("scores")||"[]")

scores.push({name,score})

localStorage.setItem("scores",JSON.stringify(scores))

showLeaderboard()

}

function showLeaderboard(){

let scores=JSON.parse(localStorage.getItem("scores")||"[]")

let html=""

scores.forEach(s=>{
html+=`<li>${s.name} - ${s.score}</li>`
})

document.getElementById("scores").innerHTML=html

}

function loginAdmin(){

let u=document.getElementById("adminUser").value
let p=document.getElementById("adminPass").value

if(u==="VIKRAM784125" && p==="#UDSB784125781005"){

document.getElementById("adminPanel").style.display="block"

}else{

alert("Wrong login")

}

}

function addQuestion(){

let q=document.getElementById("q").value

let options=[
document.getElementById("o1").value,
document.getElementById("o2").value,
document.getElementById("o3").value,
document.getElementById("o4").value
]

let ans=document.getElementById("ans").value

questions.push({q,options,answer:ans})

alert("Question added")

}
