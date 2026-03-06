// Admin password
const adminPassword = "prahelika123";

// Admin Login
function loginAdmin() {
    const password = document.getElementById("adminPassword").value;

    if(password === adminPassword){
        alert("Admin Login Successful");
        document.getElementById("adminControls").style.display = "block";
    } else {
        alert("Wrong Password");
    }
}

// Quiz Questions
let quizQuestions = [
{
question: "Who discovered gravity?",
options: ["Newton","Einstein","Galileo","Tesla"],
answer: "Newton"
},
{
question: "Capital of Assam?",
options: ["Guwahati","Dispur","Tezpur","Jorhat"],
answer: "Dispur"
}
];

let currentQuestion = 0;
let score = 0;

// Start Quiz
function startQuiz(){
const name = document.getElementById("username").value;

if(name === ""){
alert("Please enter your name");
return;
}

document.getElementById("quizBox").style.display="block";
loadQuestion();
}

// Load Question
function loadQuestion(){

let q = quizQuestions[currentQuestion];

document.getElementById("question").innerText = q.question;

let optionsHTML="";

q.options.forEach(opt=>{
optionsHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
});

document.getElementById("options").innerHTML = optionsHTML;

}

// Check Answer
function checkAnswer(ans){

if(ans === quizQuestions[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion < quizQuestions.length){
loadQuestion();
}else{
alert("Quiz Finished! Score: "+score);
}

}
