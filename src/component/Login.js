import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-hot-toast";
const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Get the navigation function

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication logic
    if (username === "admin" && password === "admin") {
      // Set authenticated status in localStorage
      localStorage.setItem("authenticated", "true");
      // Show success toast notification
      toast.success("Login successful!");
      // Redirect to the dashboard
      setTimeout(() => {
        // Redirect to the dashboard
        navigate("/dashboard");
      }, 500);
    } else {
      // Show error toast notification
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="card">
      <h2>Login Form</h2>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          className="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
