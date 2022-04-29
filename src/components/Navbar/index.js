import { Link } from "@reach/router";
import React from "react";
import "./navbar.css";
import MenuItems from "../MenuItems";

const Navbar = (props) => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
