// src/App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your sections
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BackgroundBlobs from "./components/BackgroundBlobs";
import "./App.css"; 
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
