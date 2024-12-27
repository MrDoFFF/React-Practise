import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { WEB_API } from "../../constants";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${WEB_API}products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading... ⌛</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ textAlign: "center",height:"100vh", backgroundColor:"gray"}}>
      <h1 style={{marginBottom:"2rem"}}>Product Detail</h1>
      <div
        className="detailcard"
      >
        <h4><strong>Name: {product.name}</strong></h4>
        <p><strong>Price:</strong> ${product.unitPrice}</p>
        <p><strong>Stock:</strong> {product.unitsInStock}</p>
        <p><strong>Quantity per Unit:</strong> {product.quantityPerUnit}</p>
      </div>
      <Link to="/products">
        <button className="backprod">
          Back to Products   <i style={{color:"white"}} class="fa-solid fa-arrow-right fa-lg"></i>
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;
