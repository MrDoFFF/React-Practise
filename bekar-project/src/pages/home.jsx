import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inpSearch, setInpSearch] = useState("");
    const [sorted, setSorted] = useState(false);
    const [likedItems, setLikedItems] = useState(new Set());

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("404");
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p style={{ display: 'flex', justifyContent: 'center', marginTop: '15rem', fontSize: '30px' }}>Ə nədi gözdəəə...</p>;
    }


    const filterData = data.filter((item) =>
        item.title.toLowerCase().includes(inpSearch.toLowerCase())
    );
    const sortedData = sorted
        ? [...filterData].sort((a, b) => a.title.localeCompare(b.title))
        : filterData;


    const toggleLike = (id) => {
        const updatedLikes = new Set(likedItems);
        if (updatedLikes.has(id)) {
            updatedLikes.delete(id);
        } else {
            updatedLikes.add(id);
        }
        setLikedItems(updatedLikes);
    };


    return (
        <>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <h1>Home</h1>

            <div className='search'>
                <input
                    type="text"
                    placeholder="Mehsul adini daxil edin"
                    value={inpSearch}
                    onChange={(e) => setInpSearch(e.target.value)}

                />

                <button
                    onClick={() => setSorted((prev) => !prev)}
                >
                    {sorted ? "Rejected" : "Sort 'M' to 'V'"}
                </button>
            </div>
            <table border="1" style={{ width: "100%", textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} alt={item.title} style={{ width: "50px" }} />
                            </td>
                            <td>{item.title}  </td>
                            <button
                                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                    onClick={() => toggleLike(item.id)} 
                                >
                                    <i
                                        className={`fa-regular fa-heart fa-lg ${likedItems.has(item.id) ? 'liked' : ''}`}
                                        style={{ color: likedItems.has(item.id) ? 'red' : 'gray' }}
                                    ></i>
                                </button>                            <td>{item.category}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.rating?.rate}</td>
                            <td>{item.rating?.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default Home;
