// HeroBanner.js

import React from 'react';
import styles from '../Styles/hero.module.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <img
        src="../images/ringImage.png" 
        alt="Hero Banner"
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1>Discover Timeless Elegance</h1>
        <p>Explore our exquisite collection of rings crafted with precision and passion.</p>
        <p>
            We pride ourselves on delivering
            exceptional craftsmanship, quality materials, and an extensive range
            of choices. Our commitment is to provide you with a seamless and
            enjoyable shopping experience, ensuring that you find the perfect
            ring to celebrate life's special moments.
          </p>
        <Link to='/shop'>
        <button className={styles.button}>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;

