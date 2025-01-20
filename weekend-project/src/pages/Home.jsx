import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./pages.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((data) => {
        setImmigrations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xəta baş verdi:", error);
        setError("Bir səhv baş verdi. Zəhmət olmasa yenidən cəhd edin.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "24px",
        }}
      >
        Yüklənir...
      </p>
    );
  }

  if (error) {
    return (
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "24px",
          color: "red",
        }}
      >
        {error}
      </p>
    );
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home V</title>
      </Helmet>

      <div className="cards-container">
        {immigrations.map((item) => (
          <div className="card" key={item._id}>
            <img src={item.image} alt={item.title} className="card-img" />
            <div className="card-content">
              <button>{item.country}</button>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
