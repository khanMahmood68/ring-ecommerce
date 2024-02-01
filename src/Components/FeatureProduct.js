import React, { useEffect, useState } from "react";
import data from "./ProductData";
import Styles from "../Styles/home.module.css";
import { Link } from "react-router-dom";

function FeatureProduct() {
  const [featuredRings, setFeaturedRings] = useState([]);

  useEffect(() => {
    setFeaturedRings(data);
  }, []);

  return (
    <>
      <div className={Styles.homeContainer}>
        <headers>
          <h1 >Discover the Best</h1>
        </headers>
        <section className={Styles.featuredRingsSection}>
          <h2>Featured Rings</h2>
          <div className={Styles.featuredRings}>
            {featuredRings.map((ring) =>
              ring.topSell ? (
                <div key={ring.id} className={Styles.ringCard}>
                  <img src={ring.image} alt={ring.title} />
                  <Link className={Styles.link} to={`/product/${ring.id}`}>
                    <div className="ringDetails">
                      <h3>{ring.title}</h3>

                      {ring.discountPrice ? (
                        <div>
                          <p>${ring.discountPrice}</p>
                          <p style={{ textDecoration: "line-through" }}>
                            ${ring.price}
                          </p>
                        </div>
                      ) : (
                        <p>${ring.price}</p>
                      )}
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

export default FeatureProduct;
