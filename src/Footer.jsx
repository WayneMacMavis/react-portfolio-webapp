import React, { useState } from 'react';
import axios from 'axios'; // Install axios if not already installed
import { FiMail, FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post('/send-email', formData);
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: example@example.com</p>
          {/* Add more contact information here */}
        </div>
        <div className="social-links">
          <h2>Follow Us</h2>
          <div className="icons">
            <a href="mailto:example@example.com"><FiMail /></a>
            <a href="https://twitter.com/example"><FiTwitter /></a>
            <a href="https://linkedin.com/in/example"><FiLinkedin /></a>
            <a href="https://github.com/example"><FiGithub /></a>
            <a href="https://facebook.com/example"><FiFacebook /></a>
            {/* Add more social media links here */}
          </div>
        </div>
        <div className="email-form">
          <h2>Send us an Email</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
