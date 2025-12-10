import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("adminUsers")) || [];
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );
    if (!user) {
      setError("Invalid username or password");
      return;
    }
    localStorage.setItem("adminLoggedIn", "true");
    navigate("/admin");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#FFE9D9",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
        style={{
          background: "#fff",
          width: "380px",
          padding: "30px",
          borderRadius: "18px",
          border: "1px solid #ffb199",
        }}
      >
        <h2
          style={{
            color: "#FF6B35",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          Admin Login
        </h2>

        {error && (
          <p style={{ color: "red", fontWeight: 600, textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={{
              borderRadius: "10px",
              padding: "12px",
              border: "1px solid #ffb199",
            }}
          />

          <input
            className="form-control mb-4"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{
              borderRadius: "10px",
              padding: "12px",
              border: "1px solid #ffb199",
            }}
          />

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 15px rgba(255, 107, 53, 0.4)",
            }}
            className="btn w-100"
            type="submit"
            style={{
              background: "#FF6B35",
              borderRadius: "10px",
              fontWeight: "700",
              color: "#fff",
              padding: "12px 0",
              fontSize: "16px",
            }}
          >
            Login
          </motion.button>
        </form>

        <p
          style={{
            marginTop: "12px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          New user?{" "}
          <Link
            to="/admin-register"
            style={{
              color: "#FF6B35",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
