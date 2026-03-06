import { db } from "./firebase.js";
import {
collection,
getDocs,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let questions=[]
let index=0
let score=0

window.startQuiz=async function(){

const snap=await getDocs(collection(db,"questions"))

questions=snap.docs.map(d=>d.data())

index=0
score=0

showQuestion()

}

function showQuestion(){

const q=questions[index]

document.getElementById("question").innerText=q.question

let html=""

q.options.forEach(o=>{
html+=`<button onclick="answer('${o}')">${o}</button>`
})

document.getElementById("options").innerHTML=html

startTimer()

}

window.answer=function(a){

if(a===questions[index].answer){
score++
}

}

window.nextQuestion=function(){

index++

if(index<questions.length){
showQuestion()
}else{
finishQuiz()
}

}

function finishQuiz(){

alert("Quiz finished. Score: "+score)

}
