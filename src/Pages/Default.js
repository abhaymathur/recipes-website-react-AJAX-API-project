import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <h4>
        <Header title="404" mystyle="header-default">
          <Link
            to="/recipes"
            className="btn btn-secondary btn-lg text-uppercase mt-3"
          >
            Go back to recipes
          </Link>
        </Header>
      </h4>
    );
  }
}
