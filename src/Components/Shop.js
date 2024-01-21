// Shop.js
import React, { useState, useEffect } from "react";
import Styles from "../Styles/shops.module.css";
import data from "./ProductData";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    const uniqueCategories = [
      ...new Set(data.map((product) => product.category)),
    ];
    setCategories(["All", ...uniqueCategories]);
  }, []);

  const handleCategoryFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className={Styles.shopContainer}>
      <div className={Styles.categoryFilter}>
        <label>Filter by Category:</label>
        <select onChange={(e) => handleCategoryFilter(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={Styles.productGrid}>
        {filteredProducts.map((product) => (
          <Link className={Styles.link} to={`/product/${product.id}`}>
            <div key={product.id} className={Styles.productCard}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
