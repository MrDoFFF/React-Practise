import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './pages.css';

function Home() {
    const [immigrations, setImmigrations] = useState([]);  // Məlumatları saxlamaq üçün state
    const [loading, setLoading] = useState(true);           // Yüklenmə vəziyyəti

    useEffect(() => {
        // API-dən məlumatları alırıq
        fetch('http://localhost:3050/immigrations')
            .then((response) => response.json())
            .then((data) => {
                setImmigrations(data);  // Alınan məlumatları state-ə əlavə edirik
                setLoading(false);       // Yüklenmə vəziyyətini bitiririk
            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error);
                setLoading(false);       // Xəta olarsa da yüklenmə vəziyyətini bitiririk
            });
    }, []);  // `useEffect` yalnız komponent ilk dəfə render olduqda çalışacaq

    if (loading) {
        return <p>Yüklənir...</p>;
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
                            <h3>{item.title}</h3>
                            <p><strong>Ölkə:</strong> {item.country}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
