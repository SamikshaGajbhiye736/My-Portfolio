// src/components/AdminAbout.jsx
import React, { useState, useEffect } from "react";
import { readData, writeData } from "../utils/localStorage";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const AdminAbout = () => {
  const [aboutData, setAboutData] = useState({
    title: "",
    description: "",
    counters: [
      { title: "Projects Completed", value: 0 },
      { title: "Years Experience", value: 0 },
      { title: "Happy Clients", value: 0 },
    ],
    email: "",
  });

  useEffect(() => {
    const data = readData();
    if (data && data.about) {
      setAboutData((prev) => ({
        ...prev,
        ...data.about,
        counters:
          data.about.counters && Array.isArray(data.about.counters)
            ? data.about.counters
            : prev.counters,
      }));
    }
  }, []);

  const save = () => {
    const root = readData() || {};
    root.about = aboutData;
    writeData(root);
    alert("About Saved Successfully");
  };

  const updateCounter = (index, key, val) => {
    setAboutData((prev) => {
      const counters = prev.counters ? [...prev.counters] : [];
      counters[index] = { ...counters[index], [key]: key === "value" ? Number(val) : val };
      return { ...prev, counters };
    });
  };

  const addCounter = () => {
    setAboutData((prev) => ({
      ...prev,
      counters: [...(prev.counters || []), { title: "New Counter", value: 0 }],
    }));
  };

  const removeCounter = (index) => {
    setAboutData((prev) => {
      const counters = [...(prev.counters || [])];
      counters.splice(index, 1);
      return { ...prev, counters };
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        padding: "35px",
        background: "#FFE9D9",
        borderRadius: "18px",
        border: "1px solid #FFD0BC",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        color: "#333",
      }}
    >
      <h2 style={{ color: "#FF6B35", fontWeight: "800", marginBottom: "15px" }}>
        Edit About
      </h2>

      <div className="mb-3">
        <label className="form-label" style={{ color: "#FF6B35", fontWeight: 600 }}>
          Title
        </label>
        <input
          className="form-control"
          value={aboutData.title}
          onChange={(e) => setAboutData((p) => ({ ...p, title: e.target.value }))}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={{ color: "#FF6B35", fontWeight: 600 }}>
          Description
        </label>
        <textarea
          className="form-control"
          rows={3}
          value={aboutData.description}
          onChange={(e) => setAboutData((p) => ({ ...p, description: e.target.value }))}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={{ color: "#FF6B35", fontWeight: 600 }}>
          Email
        </label>
        <input
          className="form-control"
          value={aboutData.email}
          onChange={(e) => setAboutData((p) => ({ ...p, email: e.target.value }))}
        />
      </div>

      <h5 style={{ color: "#FF6B35", marginTop: "20px", fontWeight: "700" }}>Counters</h5>

      {(aboutData.counters || []).map((c, i) => (
        <motion.div
          key={i}
          style={{ display: "flex", gap: 12 }}
          className="mb-2"
          whileHover={{ scale: 1.02 }}
        >
          <input
            className="form-control"
            value={c.title}
            onChange={(e) => updateCounter(i, "title", e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            value={c.value}
            onChange={(e) => updateCounter(i, "value", e.target.value)}
          />
          <button className="btn btn-sm btn-danger" onClick={() => removeCounter(i)}>
            Remove
          </button>
        </motion.div>
      ))}

      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <button
          className="btn"
          style={{
            background: "#FF6B35",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "8px",
          }}
          onClick={addCounter}
        >
          Add Counter
        </button>
        <button
          className="btn"
          style={{
            background: "#ff9d7c",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "8px",
          }}
          onClick={save}
        >
          Save Changes
        </button>
      </div>
    </motion.div>
  );
};

export default AdminAbout;
