import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg ml-1 mt-2 bg-light">
      <Link to="/" className="navbar-brand ">
        <img src={logo} alt="logo" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <div className="navbar-link">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link">
              <Link className="nav-link" to="/Recipes">
                Recipes
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
