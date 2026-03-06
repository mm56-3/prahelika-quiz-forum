function show(section){

let sections = document.querySelectorAll("section")

sections.forEach(sec=>{
sec.classList.remove("active")
})

document.getElementById(section).classList.add("active")

}

let questions=[]
let gallery=[]
let achievements=[]
let members=[]

function adminLogin(){

if(adminUser.value=="VIKRAM784125" && adminPass.value=="#UDSB784125781005"){

dashboard.style.display="block"

}else{

alert("Wrong Login")

}

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

alert("Question Added Successfully")

}

function uploadLogo(){

let file=logoUpload.files[0]

let reader=new FileReader()

reader.onload=function(){

localStorage.setItem("logo",reader.result)

}

reader.readAsDataURL(file)

alert("Logo Uploaded")

}

function uploadGallery(){

let file=galleryUpload.files[0]

let reader=new FileReader()

reader.onload=function(){

gallery.push(reader.result)

renderGallery()

}

reader.readAsDataURL(file)

}

function uploadAchievement(){

let file=achUpload.files[0]

let reader=new FileReader()

reader.onload=function(){

achievements.push(reader.result)

renderAchievements()

}

reader.readAsDataURL(file)

}

function addMember(){

let file=memberPhoto.files[0]

let reader=new FileReader()

reader.onload=function(){

members.push({

name:mname.value,
role:mrole.value,
photo:reader.result

})

renderMembers()

}

reader.readAsDataURL(file)

}

function renderGallery(){

let g=document.getElementById("gallerySlider")

if(!g) return

g.innerHTML=""

gallery.forEach(img=>{

g.innerHTML+=`<img src="${img}" class="animImg">`

})

}

function renderAchievements(){

let g=document.getElementById("achievementSlider")

if(!g) return

g.innerHTML=""

achievements.forEach(img=>{

g.innerHTML+=`<img src="${img}" class="animImg">`

})

}

function renderMembers(){

let box=document.getElementById("membersList")

if(!box) return

box.innerHTML=""

members.forEach(m=>{

box.innerHTML+=`

<div class="memberCard">

<img src="${m.photo}" width="100">

<h3>${m.name}</h3>

<p>${m.role}</p>

</div>

`

})

}

function updateHome(){

localStorage.setItem("homeDesc",homeText.value)

alert("Homepage Updated")

}
