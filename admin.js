function addQuestion(){

let q = document.getElementById("q").value;
let o1 = document.getElementById("o1").value;
let o2 = document.getElementById("o2").value;
let o3 = document.getElementById("o3").value;
let o4 = document.getElementById("o4").value;
let ans = document.getElementById("ans").value;

let questions = JSON.parse(localStorage.getItem("quizQuestions")) || [];

questions.push({
question:q,
options:[o1,o2,o3,o4],
answer:ans
});

localStorage.setItem("quizQuestions",JSON.stringify(questions));

alert("Question Added Successfully!");

}
