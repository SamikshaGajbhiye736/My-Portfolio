// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { readData } from "../utils/localStorage";
import "../css/about.css";

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: "My vision is to create happy clients",
    description:
      "I am a passionate and creative Java Full Stack Developer. I build modern, responsive and high-performance websites.",
    counters: [
      { title: "Projects Completed", value: 10 },
      { title: "Years Experience", value: 1 },
      { title: "Happy Clients", value: 50 },
      { title: "Technologies Mastered", value: 20 },
    ],
    email: "hello@samiksha.com",
  });

  useEffect(() => {
    // use readData helper — it will migrate legacy keys automatically
    const data = readData();
    if (data && data.about) {
      setAboutData((prev) => ({
        ...prev,
        ...data.about,
        counters: Array.isArray(data.about.counters) ? data.about.counters : prev.counters,
        email: data.about.email || prev.email,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const end = Number(value) || 0;
      if (end <= 0) {
        setCount(0);
        return;
      }
      let start = 0;
      const duration = 800;
      const step = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start++;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, step);

      return () => clearInterval(timer);
    }, [value]);

    return <>{count}</>;
  };

  const counters = Array.isArray(aboutData.counters) ? aboutData.counters : [];

  return (
    <section className="about-container" id="about">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="about-title">{aboutData.title}</h2>
            <p className="about-desc">{aboutData.description}</p>

            <div className="simple-stats">
              {counters.slice(0, 3).map((item, idx) => (
                <div key={idx} className="simple-stat">
                  <span><AnimatedNumber value={item.value} />+</span>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col md={5} className="d-flex flex-column justify-content-center">
            <div className="years-box">
              {(counters[1] && counters[1].value) ? counters[1].value : 0}+
              <small>Years of Experience</small>
            </div>

            <a href={`mailto:${aboutData.email}`} className="email-bar">
              <span>SAY HELLO!</span>
              <br />
              {aboutData.email}
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
