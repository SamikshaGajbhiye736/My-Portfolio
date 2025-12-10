import React from "react";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.15, ease: "easeOut" },
  }),
};

const AdminDashboard = ({ setPage }) => {
  const cards = [
    { title: "Update About", desc: "Change about text and counters.", page: "about" },
    { title: "Manage Skills", desc: "Add / Edit / Delete skills and progress.", page: "skills" },
    { title: "Manage Projects", desc: "Add / Edit / Delete project entries.", page: "projects" },
    { title: "Preview", desc: "View the currently saved JSON preview.", page: "preview" },
  ];

  return (
    <div style={{ padding: "40px", background: "#FFE9D9", minHeight: "100vh", color: "#333" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "25px" }}>
        Admin Dashboard
      </h2>
      <p style={{ opacity: 0.8, marginBottom: "35px", fontSize: "16px" }}>
        Manage your portfolio data — updates save to LocalStorage and reflect instantly on the public site.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          gridAutoRows: "1fr",
        }}
      >
        {cards.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "25px",
              border: "1px solid #ffd6c4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "180px",
              boxSizing: "border-box",
              // Span full width if it's the Preview card
              gridColumn: item.page === "preview" ? "1 / -1" : "auto",
            }}
          >
            <div>
              <h5 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px", color: "#FF6B35" }}>
                {item.title}
              </h5>
              <p style={{ opacity: 0.8, fontSize: "14px" }}>{item.desc}</p>
            </div>
            <button
              onClick={() => setPage(item.page)}
              style={{
                marginTop: "15px",
                background: "#FF6B35",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                padding: "10px 0",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#FF4C1F")}
              onMouseLeave={(e) => (e.target.style.background = "#FF6B35")}
            >
              {item.title.includes("Update") ? "Edit About" : item.title === "Preview" ? "Preview Data" : `Open ${item.title.split(" ")[1]}`}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
