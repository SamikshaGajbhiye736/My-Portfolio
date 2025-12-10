import React from "react";
import "../css/footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-col">
          <h2 className="footer-logo">Samiksha<span>.</span></h2>
          <p className="footer-about-text">
            Full Stack Developer specializing in modern responsive websites
            and interactive interfaces with a focus on performance and user experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col news-area">
          <h3>Stay Connected</h3>
          <p className="news-text">Send your email & I’ll connect with you personally 😊</p>

          <div className="newsletter-box">
           <form>
             <input type="email" placeholder="Enter your email" required/>
            <button>Send</button>
           </form>
          </div>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Follow Me</h3>
          <div className="footer-social">
            <a href="https://github.com/SamikshaGajbhiye736" className="social-btn" target="_blank">
                   <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/samiksha-gajbhiye-86a6332a3/" className="social-btn" target="_blank">
                   <FaLinkedin />
            </a>

            <a href="https://instagram.com" className="social-btn" target="_blank">
                   <FaInstagram />
            </a>

            <a href="mailto:samikshagajbhiye004@gmail.com" className="social-btn" target="_blank">
                   <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      <p className="footer-copy">
        Copyright © 2025 <a href="/#home"><span>Samiksha</span></a> |
        Designed & Developed By <a href="https://kavyainfoweb.com/" target="_blank"><span>Kavya Infoweb Pvt. Ltd.</span></a>
      </p>

    </motion.footer>
  );
};

export default Footer;
