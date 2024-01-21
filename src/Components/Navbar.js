import React from 'react';
import { Link } from 'react-router-dom'; 
import Styles from '../Styles/navbar.module.css'

const Navbar = () => {
  return (
    <header>
      <nav >
        <Link className={Styles.link} to="/">Home</Link>
        <Link className={Styles.link} to="/shop">Shop</Link>
        <Link className={Styles.link} to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
