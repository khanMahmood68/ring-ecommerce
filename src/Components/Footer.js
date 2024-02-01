import React from 'react';
import Styles from '../Styles/footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className={Styles.footerSection}>
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className={Styles.footerSection}>
          <h3>Quick Links</h3>
          <p><Link to='/' className={Styles.link}>Home</Link></p>
          <p><Link to='/shop' className={Styles.link}>Shop</Link></p>
          <p><Link to='/contact' className={Styles.link}>Contact</Link></p>
        </div>
      </div>
      <div className={Styles.footerBottom}>
        <p>&copy; 2024 Your E-commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
