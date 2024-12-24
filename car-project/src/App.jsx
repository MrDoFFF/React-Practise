import React, { useState, useEffect } from "react";

const apiUrl = "https://676925b9cbf3d7cefd39c232.mockapi.io/api/cars";

const App = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    image: "",
    marka: "",
    model: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xəta:", error);
        setLoading(false);
      });
  }, []);

  const handleAddCar = () => {
    setLoading(true);
    const carData = { ...newCar, id: Date.now() };
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((response) => response.json())
      .then((newCarData) => {
        setCars([...cars, newCarData]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xəta:", error);
        setLoading(false);
      });

    setNewCar({ image: "", marka: "", model: "", price: "" });
  };

  const handleDeleteCar = (id) => {
    setLoading(true);
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCars(cars.filter((car) => car.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xəta:", error);
        setLoading(false);
      });
  };

  const handleEditCar = (id) => {
    setLoading(true);
    const updatedCar = { ...newCar };
    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((response) => response.json())
      .then((updatedCarData) => {
        setCars(cars.map((car) => (car.id === id ? updatedCarData : car)));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xəta:", error);
        setLoading(false);
      });

    setNewCar({ image: "", marka: "", model: "", price: "" });
  };

  return (
    <div>
      {/* <button>Light Mode</button> */}
      <h1>Cars List</h1>
      {loading && (
        <div className="spinner-border text-danger" role="status"></div>
      )}

      <div className="newcar">
        <input
          type="text"
          placeholder="Şəkil URL"
          value={newCar.image}
          onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Marka"
          value={newCar.marka}
          onChange={(e) => setNewCar({ ...newCar, marka: e.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        />
        <input
          type="text"
          placeholder="Qiymət"
          value={newCar.price}
          onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
        />
        <button onClick={handleAddCar}>ADD CAR</button>
      </div>

      <div className="cars">
        {cars.map((car) => (
          <div className="car" key={car.id}>
            <img src={car.image} alt={car.model} />
            <div className="desc">
              <span>Marka: {car.marka}</span>
              <span>Model: {car.model}</span>
              <span id="price">Price: {car.price}$</span>
            </div>
            <button onClick={() => handleDeleteCar(car.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;