import React, { useState } from 'react';
import { WEB_API } from '../constant';

function AdminAdd() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!name || !price || !description || !image) {
            setError('Bütün sahələri doldurun!');
            return;
        }

        setLoading(true);
        setError(null);  
        setSuccess(null);


        const newProduct = {
            name,
            price,
            description,
            image,
        };


        fetch(WEB_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct), 
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Məhsul əlavə edilərkən xəta baş verdi!');
            }
            return response.json();
        })
        .then(() => {
            setSuccess('Məhsul uğurla əlavə edildi!');
            setName('');
            setPrice('');
            setDescription('');
            setImage('');
        })
        .catch((err) => {
            setError(err.message); 
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}
                
                <div style={{ marginBottom: '15px' }}>
                    <label>Məhsulun Adı:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Qiymət:</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Təsvir:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Şəkil URL-i:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    disabled={loading}
                >
                    {loading ? 'Göndərilir...' : 'Əlavə et'}
                </button>
            </form>
        </div>
    );
}

export default AdminAdd;
