import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="table">
      <h1>Products</h1>
      <Link to="/addproduct">
        <button className="add">Add Products <i class="fa-solid fa-arrow-right fa-lg"></i></button>
      </Link>

      {loading ? (
        <div className="loading">Loading⌛⌛⌛</div>
      ) : (
        <table border="1" style={{ width: "50%", margin: "auto" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td className="buttons">
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                    }}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <Link to="/editproduct">
                    <button
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        marginLeft: "10px",
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                  <Link to={`/productdetail/${product.id}`}>
                    <button
                      style={{
                        backgroundColor: "orange  ",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        marginLeft: "10px",
                      }}
                    >
                     Detail
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsPage;
