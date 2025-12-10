import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { readData } from "../utils/localStorage";
import "../css/Project.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const data = readData();
    setProjects(data.projects || []);
  }, []);

  return (
    <section className="projects-section-white" id="projects">
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Latest Projects
      </motion.h2>

      <p className="projects-subtext">Here are some of the recent projects I have built.</p>

      <div className="project-row">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="p-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img src={p.image || "https://placehold.co/600x400"} className="p-img" />
             <button
  className="view-project-btn"
  onClick={() => {
    if (p.demo) window.open(p.demo, "_blank");
    else setModal(p);
  }}
>
  View Project
</button>

            </div>

            <div className="p-content">
              <h3>{p.title}</h3>
              <p>{(p.desc || "").slice(0, 120)}{p.desc && p.desc.length > 120 ? "..." : ""}</p>
              <button className="p-btn" onClick={() => setModal(p)}>Read More →</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <button className="all-projects-btn">All Projects</button> */}

      {modal &&
        createPortal(
          <div className="modal-overlay" onClick={() => setModal(null)}>
            <motion.div
              className="modal-box-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: .9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button className="modal-close-x" onClick={() => setModal(null)}>×</button>

              <div className="modal-content-grid">
                <div className="modal-left-img">
                  <img src={modal.image || "https://placehold.co/800x600"} alt="" />
                </div>

                <div className="modal-right-text">
                  <h2>{modal.title}</h2>
                  <p>{modal.desc}</p>

                  <h4 className="stack-head">Tech Stack</h4>
                  <div className="modal-tech">
                    {modal.tech?.split(",").map((t, i) => (
                      <span key={i} className="tech-tag">{t.trim()}</span>
                    ))}
                  </div>

                  <div className="modal-action-btns">
                    {/* <button className="modal-primary-btn">Know More</button> */}

                    {modal.demo && (
                      <a href={modal.demo} target="_blank" className="modal-outline-btn">
                        Live Preview
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Projects;
