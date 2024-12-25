import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      unitPrice: price,
      unitsInStock: stock,
    };

    fetch("https://northwind.vercel.app/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Succesfully added product");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Yeni Məhsul Əlavə et</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ad: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Qiymət: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Stok: </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <button type="submit">Əlavə et</button>
      </form>
    </div>
  );
};

export default AddProductPage;
