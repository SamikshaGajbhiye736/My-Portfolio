import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AdminAbout from "./AdminAbout";
import EditSkills from "./EditSkills";
import EditProjects from "./EditProjects";
import EditContact from "./EditContact";
import PreviewData from "./PreviewData";
import '../css/admin.css';

const AdminPanel = () => {
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Header />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "#FFE6D2",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Sidebar */}
        <Sidebar setPage={setPage} />

        {/* Right screen */}
        <div
          style={{
            flex: 1,
            padding: "40px 60px",
            display: "flex",
            flexDirection: "column",
            gap: "25px", // spacing between title and card
          }}
        >
          {/* page title */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: "30px",
              fontWeight: "900",
              color: "#FF784E",
            }}
          >
            Update Portfolio
          </motion.h1>

          {/* white card container */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "18px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
              minHeight: "75vh",
              display: "flex",
              flexDirection: "column",
              gap: "20px", // spacing inside card for consistent layout
            }}
          >
            {page === "dashboard" && <Dashboard setPage={setPage} />}
            {page === "about" && <AdminAbout />}
            {page === "skills" && <EditSkills />}
            {page === "projects" && <EditProjects />}
            {page === "contact" && <EditContact />}
            {page === "preview" && <PreviewData />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
