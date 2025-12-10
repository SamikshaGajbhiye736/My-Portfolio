import React, { useState } from "react";
import "../css/contact.css";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!emailRegex.test(formData.email)) tempErrors.email = "Enter a valid email";
    if (!phoneRegex.test(formData.phone)) tempErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-section" id="contact">
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Let's collaborate on something amazing! Feel free to reach out anytime.
        </p>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="input-box">
            <FiUser className="icon" />
            <input
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          {errors.name && <span className="error">{errors.name}</span>}

          <div className="input-box">
            <FiMail className="icon" />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}

          <div className="input-box">
            <FiPhone className="icon" />
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}

          <div className="input-box">
            <FiMessageSquare className="icon" />
            <textarea
              placeholder="Write Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          {errors.message && <span className="error">{errors.message}</span>}

          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>

          {success && <p className="success-msg">{success}</p>}
        </motion.form>
      </motion.div>

      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="circle">
    <img
      src="pngtree-a-portrait-of-an-attractive-mixed-race-woman-wearing-smart-casual-image_17151179.jpg"
      alt="hero"
      className="hero-img-2"
    />
  </div>
      </motion.div>
    </div>
  );
};

export default Contact;
