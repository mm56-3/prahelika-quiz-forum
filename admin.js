const USER="VIKRAM784125"
const PASS="#UDSB784125781005"

function login(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

if(u===USER && p===PASS){

document.getElementById("dashboard").style.display="block"

}else{

alert("Wrong login")

}

}
