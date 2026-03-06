import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js"


const firebaseConfig = {

apiKey: "AIzaSyCy2BYWDIcbczywlT2UAV7BX8XAqChah88",
authDomain: "prahelika-quiz-forum.firebaseapp.com",
projectId: "prahelika-quiz-forum",
storageBucket: "prahelika-quiz-forum.firebasestorage.app",
messagingSenderId: "593115491592",
appId: "1:593115491592:web:242cb215013a3bdab850bd"

}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const storage = getStorage(app)



window.show = function(id){

document.querySelectorAll("section").forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}



let questions=[]
let index=0
let score=0
let timer


window.startQuiz=async function(){

document.getElementById("quizArea").style.display="block"

const qSnap=await getDocs(collection(db,"questions"))

questions=qSnap.docs.map(d=>d.data())

index=0

showQuestion()

}



function showQuestion(){

let q=questions[index]

document.getElementById("question").innerText=q.question

let opt=""

q.options.forEach(o=>{

opt+=`<button onclick="check('${o}')">${o}</button>`

})

document.getElementById("options").innerHTML=opt

startTimer()

}



window.check=function(o){

if(o===questions[index].answer)score++

}



window.nextQuestion=function(){

index++

if(index<questions.length){

showQuestion()

}

else{

saveScore()

}

}



function startTimer(){

let t=15

document.getElementById("timer").innerText=t

timer=setInterval(()=>{

t--

document.getElementById("timer").innerText=t

if(t<=0){

clearInterval(timer)

nextQuestion()

}

},1000)

}



async function saveScore(){

await addDoc(collection(db,"scores"),{

name:document.getElementById("playerName").value,

phone:document.getElementById("playerPhone").value,

score:score

})

alert("Quiz Finished")

}



window.adminLogin=function(){

let u=document.getElementById("adminUser").value

let p=document.getElementById("adminPass").value

if(u==="VIKRAM784125" && p==="#UDSB784125781005"){

document.getElementById("adminPanel").style.display="block"

}

}



window.addQuestion=async function(){

await addDoc(collection(db,"questions"),{

question:q.value,

options:[o1.value,o2.value,o3.value,o4.value],

answer:ans.value

})

alert("Question Added")

}



window.uploadGallery=async function(){

let file=galleryUpload.files[0]

let r=ref(storage,"gallery/"+file.name)

await uploadBytes(r,file)

alert("Uploaded")

}



window.uploadAchievement=async function(){

let file=achieveUpload.files[0]

let r=ref(storage,"achievements/"+file.name)

await uploadBytes(r,file)

alert("Uploaded")

}



window.uploadLogo=async function(){

let file=logoUpload.files[0]

let r=ref(storage,"logo/"+file.name)

await uploadBytes(r,file)

alert("Logo Updated")

}



window.addExecutive=async function(){

let file=exPhoto.files[0]

let r=ref(storage,"executives/"+file.name)

await uploadBytes(r,file)

alert("Executive Added")

}
