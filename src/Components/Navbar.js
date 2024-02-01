import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styles from "../Styles/navbar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { useShoppingCart } from "../Context/ShopingCartContext";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <header>
      <Link to="/" className={Styles.logo}>
        <img src="../images/e-commerce logo.avif" />
      </Link>
      <nav>
        <Link className={Styles.link} to="/">
          Home
        </Link>
        <Link className={Styles.link} to="/shop">
          Shop
        </Link>
        <Link className={Styles.link} to="/contact">
          Contact
        </Link>
        <Link to="/cart" className={Styles.cartTrolleyLink}>
          <FiShoppingCart className={Styles.cartTrolley} />
          <span className={Styles.cartTotalItems}>{cartQuantity}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
