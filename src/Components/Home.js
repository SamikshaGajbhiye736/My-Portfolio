import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-title">Hi, I'm Samiksha</h1>

        <h2 className="home-subtitle typing">Full Stack Developer</h2>

        <p className="home-desc">
          I design and build modern, clean and attractive websites with smooth
          animations and high performance.
        </p>

        <button className="home-btn">Download CV</button>
      </div>

      <div className="home-right">
        <div className="img-wrapper">
          <img src="pngtree-a-portrait-of-an-attractive-mixed-race-woman-wearing-smart-casual-image_17151179.jpg" alt="hero" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
