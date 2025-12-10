import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.username) errs.username = "Username required";
    if (!form.password || form.password.length < 6)
      errs.password = "Password must be 6+ characters";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone || !/^\d{10}$/.test(form.phone))
      errs.phone = "Valid 10-digit phone required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("adminUsers")) || [];
    if (users.find((u) => u.username === form.username)) {
      setMessage("Username already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("adminUsers", JSON.stringify(users));
    setMessage("Registration successful! Redirecting...");
    setTimeout(() => navigate("/admin-login"), 1500);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#FFE9D9",
        padding: "25px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
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
          Admin Register
        </h2>

        {message && (
          <p style={{ color: "#28a745", fontWeight: 600, textAlign: "center" }}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
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
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

          <input
            className="form-control mb-2"
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
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <input
            className="form-control mb-2"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{
              borderRadius: "10px",
              padding: "12px",
              border: "1px solid #ffb199",
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <input
            className="form-control mb-3"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            style={{
              borderRadius: "10px",
              padding: "12px",
              border: "1px solid #ffb199",
            }}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

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
            Register
          </motion.button>
        </form>

        <p
          style={{
            marginTop: "12px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Already have an account?{" "}
          <Link
            to="/admin-login"
            style={{
              color: "#FF6B35",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default AdminRegister;
