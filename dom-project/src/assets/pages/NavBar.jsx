import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <footer>
                <h1> Copyright © 2023 Football History Archives. All Rights Reserved.</h1>
            </footer>
        </>
    )
}
