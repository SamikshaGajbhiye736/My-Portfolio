import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import '../css/Skills.css';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact,
  FaJava, FaDatabase, FaNodeJs, FaGitAlt
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJquery,
  SiHibernate,
  SiSpring,
  SiSpringboot
} from "react-icons/si";

import { readData } from "../utils/localStorage";

function Skills() {
  const [skills, setSkills] = useState([]);

  const icons = {
    HTML: <FaHtml5 className="skill-icon" />,
    CSS: <FaCss3Alt className="skill-icon" />,
    JavaScript: <FaJsSquare className="skill-icon" />,
    Bootstrap: <FaBootstrap className="skill-icon" />,
    "Tailwind CSS": <SiTailwindcss className="skill-icon" />,
    React: <FaReact className="skill-icon" />,
    "React.js": <FaReact className="skill-icon" />,
    Node: <FaNodeJs className="skill-icon" />,
    "Node.js": <FaNodeJs className="skill-icon" />,
    "Express.js": <SiExpress className="skill-icon" />,
    MongoDB: <SiMongodb className="skill-icon" />,
    Hibernate: <SiHibernate className="skill-icon" />,
    Spring: <SiSpring className="skill-icon" />,
    "Spring Boot": <SiSpringboot className="skill-icon" />,
    MySQL: <FaDatabase className="skill-icon" />,
    Git: <FaGitAlt className="skill-icon" />,
    "Git & GitHub": <FaGitAlt className="skill-icon" />,
    jQuery: <SiJquery className="skill-icon" />,
    Java: <FaJava className="skill-icon" />,
  };

  useEffect(() => {
    const data = readData();
    if (data?.skills) setSkills(data.skills);
  }, []);

  return (
    <div className="skills-wrapper" id="skills">
      <div className="container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Skills & Expertise
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-circle-wrapper"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* White skill circle */}
              <div className="skill-circle">
                {icons[skill.name]}
                <h4>{skill.name}</h4>
              </div>

              {/* Circular progress bar with animated percentage */}
              <motion.div
                className="progress-circle"
                style={{ "--value": 0 }}
                animate={{ "--value": skill.level }}
                transition={{ duration: 2 }}
              >
                <motion.span
                  className="progress-percentage"
                  initial={{ count: 0 }}
                  animate={{ count: skill.level }}
                  transition={{ duration: 2 }}
                >
                  {Math.round(skill.level)}%
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
