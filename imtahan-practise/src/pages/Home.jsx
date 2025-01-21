import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

function Home() {
    const [women, setWomen] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc')
    useEffect(() => {
        fetch('http://localhost:3000/women/')
            .then(response => response.json())
            .then(data => setWomen(data))
            .catch(error => console.error('Error:', error));
    }, [])

    const filteredWomen = women
        .filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price; 
            } else {
                return b.price - a.price; 
            }
        });
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="body-image">
                <div className="s-image">
                    <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
                </div>
                <div className="body-context">
                    <div className="flat">
                        <span>Flat</span><h1>75%Off</h1>
                    </div>
                    <div className="happen">
                        <h1>It’s Happening <br />
                            this Season!
                        </h1>
                    </div>
                    <div className="purchs-button">
                        <button>Purchase Now</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="titlee">
                    <h1>New released Products for Women</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>


                <div className="search-bar" style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                        style={{ backgroundColor: 'black' }}
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                     <select
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>

                <div className="cards">
                    {filteredWomen.map((item) => (
                        <div className="card" key={item._id}>
                            <img src={item.image} alt={item.title} className="card-img" />
                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <h2>${item.price}.000</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;