// import React, { useState } from 'react'
// // import React {useState} from 'react'
// import { CardM } from '../fake/carddata'
// export default function Card(keyId, xImage, xTitle, XDesc) {
//     const [cards, setCards] = useState(CardM);
//     const handleDelete = (id) => setCards(cards.filter((card) => card.id !== id));
//   return (
//         <div>
//         <div className="wrapper">

//             {CardM.map((x) =>
//             <div className="card" style={{ width: '18rem' }}>
//                 <img src={x.url} class="card-img-top" alt="" />
//                 <div className="card-body">
//                 <h3>ALbum ID:{x.albumId}</h3>
//                 <h4>ID:{x.id}</h4>
//                 <h5 className="card-title">Title:{x.title}</h5>
//                 <a href="">{x.thumbnailUrl}</a>
//                 <div className="button">
//                     <button className='btn btn-primary'>Details</button>
//                     <button className='btn btn-warning'>Edit</button>
//                     <button className='btn btn-danger'>Delete</button>
//                 </div>

//                 </div>
//             </div>
//             )}
//         </div>
//         </div>
//   )
// }

    import React, { useState } from 'react';

    // Fake API məlumatları
    const initialCards = [
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoOfyvjDdSIa9ipcoqmGPFiUGVSjiM-Y1Lw&s",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6syqKX6oLmeeZeIMi-VJwqC6Xbc3_0yAgag&s",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g_GD9s7b_33w0zwckzHvayukymkXkit8UQ&s",
        thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOt_-ILuwgfG3fi6KYd8_w2l7aFelh_5JP8w&s",
        thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    ];

    function App() {
    const [cards, setCards] = useState(initialCards);

    // Elementi sil
    const handleDelete = (id) => setCards(cards.filter((card) => card.id !== id));

    return (
        <div>
        <div className="wrapper">
            {cards.map((card) => (
            <div className="card" style={{ width: '18rem' }} key={card.id}>
                <img src={card.url} className="card-img-top" alt={card.title} />
                <div className="card-body">
                <h3>Album ID: {card.albumId}</h3>
                <h4>ID: {card.id}</h4>
                <h5 className="card-title">Title: {card.title}</h5>
                <a href={card.thumbnailUrl} target="_blank" rel="noopener noreferrer">
                    {card.thumbnailUrl}
                </a>
                <div className="button mt-3">
                    <button className="btn btn-danger" onClick={() => handleDelete(card.id)}>
                    Delete
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default App;
