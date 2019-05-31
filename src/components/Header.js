import React, { Component } from "react";
import "../App.css";
//import { Link } from "react-router-dom";

export default function Header({ title, children, mystyle }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${mystyle}`}>
          <div className="col text-center ">
            <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
              {title}
            </h1>

            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "default title",
  mystyle: "header-hero"
};
