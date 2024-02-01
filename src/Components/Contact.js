// Contact.js
import React, { useState } from "react";
import Styles from "../Styles/contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., send an email)
    console.log("Form submitted:", formData);
    // You can also reset the form data here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={Styles.contactContainer}>
      <h1>Contact Us</h1>
      <div className={Styles.contactContent}>
        <div className={Styles.contactForm}>
          <p>You can reach us using the form below:</p>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button className={Styles.button} type="submit">Submit</button>
          </form>
        </div>
        <div className={Styles.contactDetails}>
          <p>Contact Details:</p>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
