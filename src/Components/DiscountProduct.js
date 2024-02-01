import React, { useEffect, useState } from "react";
import data from "./ProductData";
import { Link } from "react-router-dom";
import Styles from "../Styles/home.module.css";

function DiscountProduct() {
  const [discountProduct, setDiscountProduct] = useState([]);

  useEffect(() => {
    setDiscountProduct(data);
  }, []);
  return (
    <>
      <div className={Styles.homeContainer}>
        <headers>
          <h1>Top Discounts</h1>
        </headers>
        <section className={Styles.featuredRingsSection}>
          <h2>Discounted Rings</h2>
          <div className={Styles.featuredRings}>
            {discountProduct.map((ring) =>
              ring.discountPrice ? (
                <div key={ring.id} className={Styles.ringCard}>
                  <img src={ring.image} alt={ring.title} />
                  <Link className={Styles.link} to={`/product/${ring.id}`}>
                    <div className="ringDetails">
                      <h3>{ring.title}</h3>
                      <p>${ring.discountPrice}</p>
                      <p style={{ textDecoration: "line-through" }}>
                        ${ring.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default DiscountProduct;
