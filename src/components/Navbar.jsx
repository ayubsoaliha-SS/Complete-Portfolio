import React from "react";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a href="#home" className="logo" aria-label="Soaliha Ayub home">
        <span>SA</span>
        <small>Portfolio</small>
      </a>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/Soaliha-Ayub-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
