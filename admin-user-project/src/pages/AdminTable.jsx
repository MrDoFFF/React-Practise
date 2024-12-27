import React, { useEffect, useState } from 'react'
import { WEB_API } from '../constant';
function AdminTable() {
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);


    useEffect(() => {

        fetch(WEB_API)
            .then((response) => {
                if (!response.ok) {
                    console.log("melumatlari alarken xeta bas verdi");

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
    }, []);

    const deleteproduct = (id) => {
        fetch(`${WEB_API}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    console.log("Mehsul silinerken xeta bas verdi");
                }
                setproducts(products.filter((product) => product.id !== id));
            })
            .catch((err) => {
                seterror(err.message);
            })
    }

    const editproduct = (id) => {
        alert(`Redakte etmek ucun ID:${id}`)
    }

    if (loading) {
        return <div className='loading' >Yüklənir...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='admintable'>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Şəkil</th>
                        <th>Ad</th>
                        <th>Qiymət</th>
                        <th>Təsvir</th>
                        <th>Əməliyyatlar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <button onClick={() => editproduct(product.id)} style={{ marginRight: '10px', backgroundColor: 'lightgreen' }}>
                                    Redaktə et
                                </button>
                                <button onClick={() => deleteproduct(product.id)} style={{ backgroundColor: 'red', color: 'white' }}>
                                    Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminTable
