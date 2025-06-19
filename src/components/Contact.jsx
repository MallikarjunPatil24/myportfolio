// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactImg from "../assets/contact.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vwtcuit",
        "template_8g75y9k",
        form.current,
        "SG2591AOHy71vdpEK"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Let’s get in touch and build something great!</p>

      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImg} alt="Contact Illustration" />
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
