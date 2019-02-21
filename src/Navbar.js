import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
`;

const Img = styled.img`
  width: 40px;
`;

class Navbar extends React.PureComponent {
  logOut = e => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/login`);
  };

  render() {
    const loginRegLink = (
      <Ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </Ul>
    );

    const userLink = (
      <Ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            Settings
          </Link>
        </li>
        <li className="nav-item">
          {this.props.user.username}
        </li>
    
        <li className="nav-item">
          <a href="#/" className="nav-link" onClick={this.logOut}>
            Logout
          </a>
        </li>
      </Ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <Img src="assets/logo.png" alt="logo" />
        </a>
        {localStorage.usertoken ? userLink : loginRegLink}
      </nav>
    );
  }
}

export default withRouter(Navbar);
