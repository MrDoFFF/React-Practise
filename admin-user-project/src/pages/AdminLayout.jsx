import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
function AdminNavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/adminlayout">Product Table</NavLink></li>
                    <li><NavLink to="adminadd">Add Product</NavLink></li>
                </ul>
            </nav>
            <Outlet />
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}

export default AdminNavBar
