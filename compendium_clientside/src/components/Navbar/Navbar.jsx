import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo (1) 2.svg";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return ( 
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-img"><img src={logo} alt="" /></div>
          <NavLink exact to="/" className="nav-logo">
            The Compendium
          </NavLink>
         
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/articleslist"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Articles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/archives"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Archives
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
