import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="eyebrow">Software Engineer | Full Stack Developer</span>

        <h1>Soaliha Ayub</h1>

        <p className="hero-kicker">
          Building polished web products with React, Node.js, and product-minded engineering.
        </p>

        <p className="hero-copy">
          Software engineer with a mechanical engineering foundation,
          currently advancing full-stack development at Masai School.
          Experienced in building AI-powered applications using React,
          Node.js and JavaScript.
        </p>

        <div className="hero-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="secondary-btn"
          >
            View Projects
          </a>
        </div>

        <div className="hero-metrics" aria-label="Portfolio highlights">
          <div>
            <strong>5+</strong>
            <span>Portfolio builds</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>Product focus</span>
          </div>
          <div>
            <strong>Full Stack</strong>
            <span>React + Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
