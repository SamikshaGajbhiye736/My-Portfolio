import React from "react";
import { motion } from "framer-motion";
import { readData } from "../utils/localStorage";

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.15, ease: "easeOut" },
  }),
};

const PreviewData = () => {
  const data = readData();

  return (
    <div
      style={{
        padding: "40px",
        background: "#FFE9D9",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "800",
          marginBottom: "25px",
          color: "#FF6B35",
        }}
      >
        Preview Saved Data
      </h2>

      {/* About */}
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          border: "1px solid #ffd6c4",
          marginBottom: "25px",
        }}
      >
        <h3 style={{ color: "#FF6B35", marginBottom: "12px", fontWeight: "700" }}>
          About
        </h3>

        <div style={{ fontSize: "18px", fontWeight: 700 }}>{data.about.title}</div>
        <p style={{ opacity: 0.8, marginTop: "8px" }}>{data.about.description}</p>

        <div style={{ marginTop: 15 }}>
          {data.about.counters.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: 6,
                fontSize: "15px",
              }}
            >
              <div
                style={{ width: 180, color: "#FF6B35", fontWeight: 700 }}
              >
                {c.title}
              </div>
              <div style={{ fontWeight: 600 }}>{c.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          border: "1px solid #ffd6c4",
          marginBottom: "25px",
        }}
      >
        <h3 style={{ color: "#FF6B35", marginBottom: "12px", fontWeight: 700 }}>
          Skills
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {data.skills.map((s) => (
            <div
              key={s.id}
              style={{
                padding: "8px 15px",
                background: "#FFE9D9",
                borderRadius: "10px",
                fontWeight: 700,
                border: "1px solid #ffb199",
              }}
            >
              {s.name} — {s.level}%
            </div>
          ))}
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          border: "1px solid #ffd6c4",
        }}
      >
        <h3 style={{ color: "#FF6B35", marginBottom: "12px", fontWeight: 700 }}>
          Projects
        </h3>

        {data.projects.map((p) => (
          <div key={p.id} style={{ marginBottom: 15 }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#222" }}>
              {p.title}
            </div>
            <p style={{ opacity: 0.8, marginTop: 5 }}>{p.desc}</p>
            <div style={{ fontSize: "14px", opacity: 0.75 }}>
              Tech: {p.tech}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PreviewData;
