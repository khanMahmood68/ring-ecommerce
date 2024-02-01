// // Home.js
// import React, { useState, useEffect } from "react";
// import Styles from "../Styles/home.module.css";
// import data from "./ProductData";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [featuredRings, setFeaturedRings] = useState([]);

//   useEffect(() => {
//     setFeaturedRings(data);
//   }, []);

//   return (
//     <>
//     <div className={Styles.homeContainer}>
//       <headers>
//         <h1>Welcome to Our E-commerce Platform</h1>
//       </headers>
//       <section className={Styles.featuredRingsSection}>
//         <h2>Featured Rings</h2>
//         <div className={Styles.featuredRings}>
//           {featuredRings.map((ring) => (

//             <div key={ring.id} className={Styles.ringCard}>
//               <img src={ring.image} alt={ring.title} />
//               <Link className={Styles.link} to={`/product/${ring.id}`}>
//               <div className="ringDetails">
//                 <h3>{ring.title}</h3>
//                 <p>${ring.price}</p>
//               </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import Styles from "../Styles/home.module.css";
import { Link } from "react-router-dom";
import FeatureProduct from "./FeatureProduct";
import HeroBanner from "./HeroBanner";
import DiscountProduct from "./DiscountProduct";

function Home() {
  return (
    <div className={Styles.container}>
      <HeroBanner/>
      <FeatureProduct/>
      <DiscountProduct/>
    </div>
  );
}

export default Home;
