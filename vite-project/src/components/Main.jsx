import React from 'react'
import Car from '../assets/images/image1.png'
function Main() {
    return (
        <>
            <div className="cards">
                <div className="image">
                    <img src={Car} alt="" />
                </div>
                <div className="bussines-title">
                    <h1>Business Name or Tagline</h1>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    <button>Call to Action!</button>
                </div>
            </div>
           <div className="container">
           <div className="wrapper">
                <p>This call to action card is a great place to showcase some important information or display a clever tagline!</p>
            </div>
           </div>
           <div className="row">
            <div className="card">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                <br />
            <hr />
                <button>More Info</button>
            </div>
            <div className="card">
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                <br />
            <hr />
                <button>More Info</button>

            </div>
            <div className="card">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                <br />
            <hr />
                <button>More Info</button>
         

            </div>
           </div>
        </>
    )
}

export default Main