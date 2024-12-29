import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><NavLink to="wishlist">Wishlist</NavLink></li>   
                </ul>
            </nav>
            <Outlet />
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}

export default Layout
