import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for navigation
import "../index.css";

function NavButtons() {
  return (
    <div className="nav-buttons">
      <NavLink to="/" exact className="nav-button" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-button" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/education" className="nav-button" activeClassName="active">
        Education
      </NavLink>
      <NavLink to="/hobbies" className="nav-button" activeClassName="active">
        Hobbies
      </NavLink>
      <NavLink to="/contact" className="nav-button" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
}

export default NavButtons;
