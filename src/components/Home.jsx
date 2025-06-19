import React from 'react';
import './Home.css';
import myImage from '../assets/myphoto.jpg'; // Replace with your image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hey 👋 I&apos;m</h3>
        <h1>Mallikarjun Patil</h1>
        <p className="passion-text">A passionate</p>
        <p className="role-text">Frontend Developer</p>
        <p className="desc-text">
          Specialized in building stunning pixel-perfect interactive websites/applications.
        </p>
        <img src={myImage} alt="Mallikarjun Mallu" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;

