import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layouts.css";

function Layouts() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png"
            alt="Logo"
          />
        </div>
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <ul className={`menu ${sidebarOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="addproduct" onClick={toggleSidebar}>
              Add Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Contact
            </NavLink>
          </li>

        </ul>
      </nav>
      <Outlet />
      <footer>
        <div className="footer">
          <div className="div">
            <div className="card">
              <h2>About Us</h2>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
            <div className="card">
              <h2>Newsletter</h2>
              <br />
              <p>Stay update with our latest</p>
              <br />
              <div className="email">
                <input type="e-mail" placeholder="Enter Email" />
                <button><i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            <div className="card">
              <h2>Follow Us</h2>
              <br />
              <p>Let us be social</p>
              <br />
              <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-opera"></i>
                <i class="fa-brands fa-google"></i>
              </div>
            </div>
          </div>
          <p className="end">Copyright ©2025 All rights reserved | This template is made with  <span>❤</span> by  <p>Colorlib</p>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layouts;
