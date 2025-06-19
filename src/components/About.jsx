// src/components/About.jsx
import React from "react";
import "./About.css";
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="blob2"></div> 

      <div className="about-container">
        <div className="about-right" data-aos="fade-up">
          <h1 data-aos="fade-right" data-aos-delay="100">About Me</h1>
          <p data-aos="fade-left" data-aos-delay="200">
            Hi, I'm <strong>Mallikarjun Patil</strong>. I'm a passionate and curious developer with a strong foundation in web technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. I enjoy transforming ideas into real-world solutions through clean, responsive, and user-friendly interfaces.
            <br /><br />
            My journey into tech began with a love for building things — now I combine creativity with logic to solve problems and create meaningful digital experiences. I’m also familiar with <strong>Firebase</strong> for backend integration and version control using <strong>Git & GitHub</strong>. 
            <br /><br />
            Currently, I'm expanding my skills in <strong>Java</strong> and exploring full-stack development. Whether working solo or in a team, I strive to learn continuously and push my boundaries.
          </p>

          <a
            href="/myResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaFileAlt className="resume-icon" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
