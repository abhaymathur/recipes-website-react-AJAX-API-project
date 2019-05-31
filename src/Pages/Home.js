import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <h4>
        <Header title="Amazing Recipes" mystyle="header-hero">
          <Link
            to="/recipes"
            className="btn btn-secondary btn-lg text-uppercase mt-3"
          >
            check out recipes
          </Link>
        </Header>
      </h4>
    );
  }
}
