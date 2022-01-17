import React from "react";
import { NavLink } from "react-router-dom";
import './css/Navigation.css'

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand">
        <div className="container">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item hoverable">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item hoverable">
                <NavLink className="nav-link" to="/about">
                  Why Twilio?
                </NavLink>
              </li>
              <li className="nav-item hoverable">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;