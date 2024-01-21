// ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import data from "./ProductData";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(data.filter((product)=>product.id == id))
  }, []);

  console.log('Single product',product);
  
  return (
    <>
      {product ? (
        <ProductDetailsCard product={product}/>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
