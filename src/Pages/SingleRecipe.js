import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipeData: recipeData,
      id: id,
      loading: false
    };
  }
  render() {
    const {
      image_url,
      ingredients,
      publisher_url,
      source_url,
      title,
      publisher
    } = this.state.recipeData;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col text-center mt-5">
              <h1 className="text-uppercase text-orange mx-auto my-auto">
                LOADING PAGE...
              </h1>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row ">
          <div className="col mt-16">
            <Link
              to="/recipes"
              className="btn btn-warning text-capitaloize mt-3"
            >
              Back to recipes
            </Link>
          </div>
          <div className="col mt-16">
            <h4 className="text-uppercase">{title}</h4>
            <h4 className="text-slanted text-orange text-capitalize">
              provided by {publisher}
            </h4>
            <a className="btn btn-primary text-capitalize" href={publisher_url}>
              publisher webpage
            </a>
            <a
              className="btn btn-success text-capitalize ml-2"
              href={source_url}
            >
              Recipe URL
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col mt-16">
            <img src={image_url} alt="food" />
          </div>
          <div className="col mt-16">
            <ul className="list-group list-unstyled mt-5">
              {ingredients.map(item => (
                <li className="list-group-item py-2 border pl-4 text-slanted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
