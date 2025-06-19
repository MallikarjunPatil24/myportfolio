// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/mallikarjun-patil-6471562a5" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/MallikarjunPatil24?tab=repositories" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="mallikarjunpatil.tech@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Mallikarjun patil. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

