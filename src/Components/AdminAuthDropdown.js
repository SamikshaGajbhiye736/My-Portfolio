import React, { useState, useEffect } from "react";

const AdminAuthDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // toggle between login/register
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  // Load users from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem("adminUsers");
    if (savedUsers) setUsers(JSON.parse(savedUsers));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const exists = users.find((u) => u.username === form.username);
    if (exists) {
      setMessage("User already exists! Try logging in.");
      return;
    }
    const updatedUsers = [...users, form];
    setUsers(updatedUsers);
    localStorage.setItem("adminUsers", JSON.stringify(updatedUsers));
    setMessage("Registration successful! You can log in now.");
    setForm({ username: "", password: "" });
    setIsLogin(true);
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );
    if (user) {
      setMessage(`Welcome back, ${user.username}!`);
    } else {
      setMessage("Invalid username or password!");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{
          padding: "10px 20px",
          background: "#FFC107",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Admin Panel
      </button>

      {dropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            right: 0,
            width: "280px",
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)",
            color: "#fff",
            zIndex: 1000,
          }}
        >
          <div style={{ marginBottom: "15px", textAlign: "center" }}>
            <button
              onClick={() => setIsLogin(true)}
              style={{
                marginRight: "10px",
                padding: "5px 10px",
                background: isLogin ? "#FFC107" : "transparent",
                color: isLogin ? "#000" : "#FFC107",
                border: "1px solid #FFC107",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              style={{
                padding: "5px 10px",
                background: !isLogin ? "#FFC107" : "transparent",
                color: !isLogin ? "#000" : "#FFC107",
                border: "1px solid #FFC107",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #FFC107",
              background: "#222",
              color: "#fff",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #FFC107",
              background: "#222",
              color: "#fff",
            }}
          />
          <button
            onClick={isLogin ? handleLogin : handleRegister}
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              background: "#FFC107",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </button>

          {message && (
            <p style={{ marginTop: "10px", textAlign: "center" }}>{message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminAuthDropdown;
