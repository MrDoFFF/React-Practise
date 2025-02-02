import React, { useEffect, useState } from 'react'
import { WEB_API } from '../constant'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(WEB_API)
            .then((response) => {
                if (!response.ok) {
                    console.log("error");

                }
                return response.json();
            })
            .then((data) => {
                setproducts(data);
            })
            .catch((err) => {
                seterror(err.message);
            })
            .finally(() => {
                setloading(false);
            });

    }, [])

    if (loading) {
        return <div className='loading'>Yüklənir...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleWishlistClick = () => {
        navigate('/wishlist'); 
        
    };

    return (
        <div className='home' style={{ padding: '20px' }}>
            <h1>Ne varsa Arazda Var</h1>
            <div className='home-body'>
                {products.map((product) => (
                    <div className='home-card'
                        key={product.id}>
                        <img
                            src={product.image}
                            alt={product.name}
                        />
                        <h3>{product.name}</h3>
                        <p><strong>Qiymət:</strong> ${product.price}</p>
                        <p><strong>Təsvir:</strong> ${product.description}</p>
                        <div>
                        
                           <button      className="wishlist-icon" 
                            onClick={handleWishlistClick} 
                            style={{ cursor: 'pointer' }}>❤️</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
