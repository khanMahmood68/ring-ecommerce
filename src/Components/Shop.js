// Shop.js
import React, { useState, useEffect } from "react";
import Styles from "../Styles/shops.module.css";
import data from "./ProductData";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    const uniqueCategories = [
      ...new Set(data.map((product) => product.category)),
    ];
    setCategories(["All", ...uniqueCategories]);
    const uniqueColor = [
      ...new Set(data.map((product) => product.color)),
    ];
    setColorFilter(["All", ...uniqueColor]);
  }, []);

  const handleCategoryFilter = (category) => {
    let filtered = products;
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
 };

 const handleColorFilter = (color) => {
    let filtered = products;
    if (color !== "All") {
      filtered = filtered.filter((product) => product.color === color);
    }
    setFilteredProducts(filtered);
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
      <div className={Styles.colorFilter}>
        <label>Filter by Color:</label>
        <select
          onChange={(e) => handleColorFilter(e.target.value)}
        >
          {colorFilter.map((color, index) => (
            <option key={index} value={color}>
              {color}
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
              {product.discountPrice ? (
                <div>
                  <p>${product.discountPrice}</p>
                  <p style={{ textDecoration: "line-through" }}>
                    ${product.price}
                  </p>
                </div>
              ) : (
                <p>${product.price}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
