import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { WEB_API } from "./constant";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(WEB_API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading" style={{display:'flex', justifyContent:'center', marginTop:'15rem'}}>Yüklənir...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home page with categories" />
      </Helmet>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontVariant: "small-caps",
          animation: "fadeInMove 2s ease-in-out",
        }}
      >
        Love V🤍
      </h1>
      <style>
        {`
          @keyframes fadeInMove {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style> 

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              border: "1px solid white",
              width: "200px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <span>
              <strong>ID:</strong> {category.id}
            </span>
            <p>
              <strong>Name:</strong> {category.name}
            </p>
            <button
              onClick={() => navigate(`/details/${category.id}`)}
              style={{ backgroundColor: "white", color: "black" }}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
