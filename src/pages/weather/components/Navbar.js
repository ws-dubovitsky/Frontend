import React from "react";
import logo from "./img/logo.png";

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
            <a className="nav-link" href="/#">
              Main
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
