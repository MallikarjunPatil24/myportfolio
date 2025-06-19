import React from "react";
import "./Projects.css";


import teamupImg from "../assets/teamup.png";
import bunkImg from "../assets/BunkClass.png";
import watchImg from "../assets/watchlanding.png";
import radialImg from "../assets/radialmenu.png";
import loginImg from "../assets/loginpage.png";

const projects = [
  {
    title: "Tech-Connects",
    description:
      "A platform to connect tech enthusiasts with mentors and resources.",
    image: teamupImg,
    link: "https://github.com/MallikarjunPatil24/tech-connects",
    live: "https://tech-connects.netlify.app/",
  },
  {
    title: "Class Bunk Calculator",
    description:
      "A web app to calculate class attendance and manage bunk classes.",
    image: bunkImg,
    link: "https://github.com/MallikarjunPatil24/BunkClass",
    live: "https://classbunkcalculator.netlify.app/",
  },
  {
    title: "Watch Landing Page",
    description:
      "A responsive landing page for a watch brand, built with HTML, CSS, and JavaScript.",
    image: watchImg,
    link: "https://github.com/MallikarjunPatil24/Watch-landing-page",
    live: "https://watch-landing-page-lime.vercel.app/",
  },
  {
    title: "Radial Menu Layout",
    description: "A notes app built with React for managing personal notes.",
    image: radialImg,
    link: "https://github.com/MallikarjunPatil24/Radial-Menu-Layout",
    live: "https://radial-menu-layout.vercel.app/",
  },
  {
    title: "Login Page",
    description: "A sleek login page design using HTML, CSS, and JavaScript.",
    image: loginImg,
    link: "https://github.com/MallikarjunPatil24/LOGIN_PAGE",
    live: "https://login-page-silk-two.vercel.app/",
  },
];


const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Things I’ve built so far</p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-buttons">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="btn blue"
              >
                GitHub
              </a>
              <a
                href={proj.live}
                target="_blank"
                rel="noreferrer"
                className="btn pink"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
