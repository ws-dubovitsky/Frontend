import React from "react";
import logo from "./img/logo.png";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.PureComponent {
  logOut = e => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/login`);
    console.log(this.props);
  };

  render() {
    const loginRegLink = (
      <ul style={{ width: "100%" }} className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul style={{ width: "100%" }} className="navbar-nav justify-content-end">
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
          <Link className="nav-link" to="/profile">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link" onClick={this.logOut}>
            Logout
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <img style={{ width: "40px" }} src={logo} alt="logo" />
        </a>
        {localStorage.usertoken ? userLink : loginRegLink}
      </nav>
    );
  }
}

export default withRouter(Navbar);
