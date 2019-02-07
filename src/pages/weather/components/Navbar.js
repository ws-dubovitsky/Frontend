import React from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <img style={{ width: "40px" }} src={logo} alt="logo" />
        </a>
        <ul
          style={{ width: "100%" }}
          className="navbar-nav justify-content-end"
        >
          <li className="nav-item">
            <Link className="nav-link" to="/main">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
