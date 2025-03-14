import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No validation, just redirect
    localStorage.setItem("adminUsername", username);
    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />
      <div className="auth">
        <div className="container">
          <h3>Welcome Admin!</h3>
          <br />
          <h2>Admin Login</h2>
          <br />
          <form autoComplete="off" className="form-group" onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <div className="btn1">
              <button type="submit" className="btn btn-primary btn-md mybtn">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
