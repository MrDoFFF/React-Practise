import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WEB_API } from "./constant";

function Details() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${WEB_API}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch details");
                }
                return response.json();
            })
            .then((data) => {
                setCategory(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="loading">Yüklənir...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
                style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid white' }}
            >
                <p>
                    <strong>ID:</strong> {category.id}
                </p>
                <p>
                    <strong>Name:</strong> {category.name}
                </p>
                <p>
                    <strong>Description:</strong> {category.description}
                </p>
            </div>
        </div>
    );
}

export default Details;
