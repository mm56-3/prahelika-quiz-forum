import { useState } from "react";
import { useRouter } from "next/router";

import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion"; // Animation library

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Your new admin credentials
  const adminUsername = "myadmin";
  const adminPassword = "mypassword123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminUsername && password === adminPassword) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // gradient background
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          width: "320px",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#fff" }}>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#fff",
              color: "#2575fc",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </motion.button>
        </form>
        {error && <p style={{ color: "#ff6b6b", marginTop: "15px" }}>{error}</p>}
      </motion.div>
    </div>
  );
}

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
