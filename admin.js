import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Change these to your new admin credentials
  const adminUsername = "myadmin";
  const adminPassword = "mypassword123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminUsername && password === adminPassword) {
      // Login successful → go to admin dashboard
      router.push("/admin/dashboard"); // make sure you have a dashboard page
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", margin: "5px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "5px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", margin: "10px" }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
function addQuestion(){
const adminUsername = "mynewadmin";
const adminPassword = "mypassword123";
let questions =
JSON.parse(localStorage.getItem("quizQuestions")) || [];

questions.push({
question:q.value,
options:[o1.value,o2.value,o3.value,o4.value],
answer:ans.value
});

localStorage.setItem(
"quizQuestions",
JSON.stringify(questions)
);

alert("Question Added!");
}

function resetBoard(){
localStorage.removeItem("leaderboard");
alert("Leaderboard Reset");
}

function loadPlayers(){

let leaderboard =
JSON.parse(localStorage.getItem("leaderboard")) || [];

let list=document.getElementById("players");

leaderboard.forEach(p=>{
let li=document.createElement("li");
li.textContent=p.name+" - "+p.score;
list.appendChild(li);
});
}

loadPlayers();
