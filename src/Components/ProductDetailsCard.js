import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/productDetailsCard.module.css";
import { useShoppingCart } from "../Context/ShopingCartContext";

function ProductDetailsCard({ product }) {
  const { title, image, category, description, price, id } = product[0];

  const { increaseCartQuntity } = useShoppingCart();

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) =>
      prevZoomLevel > 0.1 ? prevZoomLevel - 0.1 : prevZoomLevel
    );
  };

  console.log("Product Details card", product[0]);
  return (
    <div className={Styles.productDetailsContainer}>
      <div className={Styles.zoomableImageContainer}>
        <img
          className={Styles.zoomableImage}
          style={{ transform: `scale(${zoomLevel})` }}
          src={image}
          alt={product.title}
        />
        <div className={Styles.zoomButtons}>
          <button onClick={handleZoomIn}>+</button>
          <button onClick={handleZoomOut}>-</button>
        </div>
      </div>
      <div className={Styles.productInfo}>
        <h1 className={Styles.h1} style={{ textAlign: "start" }}>{title}</h1>
        <h3  className={Styles.productCategory}>{category}</h3>
        <p className={Styles.productDescription}>{description}</p>
        <p className={Styles.productPrice}>${price}</p>
        <button
          className={Styles.backToShop}
          onClick={() => {
            increaseCartQuntity({title, image, category, description, price, id });
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
