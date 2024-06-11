import React, { useState } from "react";
import "../Styles/Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:sarfaraz6562@gmail.com?subject=Contact%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/imsarfaraz789/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/Imsarfaraz789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://twitter.com/imsarfaraz456/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 sarfaraz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
