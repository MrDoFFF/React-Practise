import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WEB_API } from "../../constants";

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

    fetch(`${WEB_API}`, {
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
    <div className="add-title">
      <>
        <Link to="/products">
          <button> <i class="fa-solid fa-arrow-left fa-lg"></i></button>
        </Link>
      </>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ad: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="mehsul adi"
          />
        </div>
        <div>
          <label>Qiymət: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="mehsul qiymeti"
          />
        </div>
        <div>
          <label>Stok: </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            placeholder="mehsul sayi"
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddProductPage;
