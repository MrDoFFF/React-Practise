import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { WEB_API } from "../../constants";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${WEB_API}products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched product:", data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (loading) {
    return <div>Loading... ⌛</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Edit Product</h1>
      <Formik
        initialValues={{
          name: product.name,
          unitPrice: product.unitPrice,
          unitsInStock: product.unitsInStock,
        }}
        onSubmit={(values) => {
          console.log("Submitting values:", values);
          fetch(`${WEB_API}products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          })
            .then((res) => {
              console.log("Response status:", res.status);
              if (!res.ok) {
                throw new Error("Failed to update product.");
              }
              return res.json();
            })
            .then((data) => {
              console.log("Updated product:", data);
              alert("Product updated successfully!");
              navigate("/products")
            })
            .catch((error) => {
              console.error("Error updating product:", error);
              alert("Error updating product: " + error.message);
            });
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Name:</label>
              <Field type="text" name="name" required style={{ border: "1px solid black", color: "red" }} />
            </div>
            <div>
              <label>Price:</label>
              <Field type="number" name="unitPrice" required style={{ border: "1px solid black", color: "red" }} />
            </div>
            <div>
              <label>Stock:</label>
              <Field type="number" name="unitsInStock" required style={{ border: "1px solid black", color: "red" }} />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                border: "none",
                marginTop: "10px",
              }}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProduct;
