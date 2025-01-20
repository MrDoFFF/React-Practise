import React from "react";
import "./Layout.css";
import { NavLink, Outlet } from "react-router-dom";

function UserLayouts() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="title">
            <p>
              We believe we helps people <br />
              for happier lives
            </p>
          </div>
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/logo.png"
              alt=""
            />
          </div>
          <div className="contact">
            <p>+880 12312 658 439</p>
            <i className="fa-solid fa-phone fa-xl"></i>
          </div>
        </div>
        <hr />
        <nav>
          <ul>
            <li className="homelink">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/addproduct">ADD</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default UserLayouts;
