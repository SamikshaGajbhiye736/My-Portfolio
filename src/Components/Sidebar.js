import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUserEdit,
  FaTools,
  FaFolderOpen,
  FaPhone,
  FaEye,
} from "react-icons/fa";

const Sidebar = ({ setPage }) => {
  const menuItem = {
    padding: "14px 18px",
    marginBottom: "14px",
    borderRadius: "14px",
    cursor: "pointer",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    transition: "0.25s",
    fontSize: "15px",
    fontWeight: 600,
    boxShadow: "rgb(0 0 0 / 10%) 0px 3px 12px",
  };

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        width: 260,
        background: "#FFE6D2",
        padding: "36px 24px",
        minHeight: "100vh",
        borderRight: "2px solid rgba(0,0,0,0.06)",
      }}
    >
      <h2
        style={{
          color: "#FF784E",
          marginBottom: "32px",
          fontSize: "24px",
          fontWeight: "900",
        }}
      >
        Admin Panel
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {[
          ["dashboard", <FaHome />, "Dashboard"],
          ["about", <FaUserEdit />, "Edit About"],
          ["skills", <FaTools />, "Edit Skills"],
          ["projects", <FaFolderOpen />, "Edit Projects"],
          // ["contact", <FaPhone />, "Edit Contact"],
          ["preview", <FaEye />, "Preview Data"],
        ].map(([pg, icon, label], index) => (
          <motion.li
            key={index}
            whileHover={{
              x: 10,
              background: "#FF784E",
              color: "white",
            }}
            onClick={() => setPage(pg)}
            style={menuItem}
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "white",
                padding: "6px 6px",
                borderRadius: "50%",
                fontSize: "14px",
                color: "#FF784E",
              }}
            >
              {icon}
            </motion.span>
            {label}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
