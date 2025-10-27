// ContactSection.js
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    // Later: integrate with email sending service or backend API
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <p><strong>Address:</strong> 123 Education Lane, City, Country</p>
        <p><strong>Email:</strong> info@youremail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Follow us:</strong> 
          <a href="https://facebook.com" target="_blank"> Facebook </a> | 
          <a href="https://instagram.com" target="_blank"> Instagram </a> | 
          <a href="https://linkedin.com" target="_blank"> LinkedIn </a>
        </p>
      </div>

      {submitted ? (
        <p className="thank-you">Thank you! We will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
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
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
