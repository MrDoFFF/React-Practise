import React from 'react';
import { Link } from 'react-router-dom';

function Wishlist({ likedItems, data }) {
    const wishlistItems = data.filter(item => likedItems.has(item.id));

    return (
        <div>
            <h1>Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Wishlist hələ boşdur.</p>
            ) : (
                <table border="1" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlistItems.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.image} alt={item.title} style={{ width: "50px" }} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>${item.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default Wishlist;
