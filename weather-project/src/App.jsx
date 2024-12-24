import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState(""); 
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchWeather("London");
  }, []);

  const fetchWeather = (cityQuery) => {
    setError(""); 
    setLoading(true); 
    setWeather(null); 

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q=${cityQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); 
        if (data.error) {
          setError("City not found"); 
          setWeather(null); 
        } else {
          setWeather(data); 
          setError(""); 
        }
      })
      .catch(() => {
        setLoading(false); 
        setError("Error fetching data"); 
        setWeather(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city || "London"); 
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ padding: "20px" }}>
        <h1>Weather Information</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City name"
           
          />
          <button
            type="submit"
         
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>

        {loading && (
          <div
            className="spinner"
            style={{
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              marginTop: "20px",
              animation: "spin 2s linear infinite",
            }}
          ></div>
        )}

        {!loading && weather && (
          <div
            className="weather"
           
          >
            <h2>{weather.location.name}</h2>
            <p><strong>Region:</strong> {weather.location.region}</p>
            <p><strong>Weather:</strong> {weather.current.condition.text}</p>
            <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
            <p><strong>Wind:</strong> {weather.current.wind_kph} km/h</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
          </div>
        )}

        {error && !loading && (
          <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
