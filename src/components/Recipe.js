import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Recipe extends Component {
  render() {
    //console.log(this.props.item);
    const {
      publisher,
      title,
      source_url,
      recipe_id,
      image_url
    } = this.props.item;
    return (
      <>
        <div className="col-10 mx-auto col-md-6 col-lg-4">
          <div className="card" syle={{ height: "100%" }}>
            <img
              className="card-img-top"
              src={image_url}
              style={{ height: "14rem" }}
              alt="food"
            />
            <div className="card-body text-capitalize">
              <h6> {title}</h6>
              <h6 className="text-slanted text-warning">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <Link to={`/recipes/${recipe_id}`} className="btn btn-primary">
                Details
              </Link>

              <a
                href={source_url}
                ref="noopener noreferrer"
                target="_blank"
                className="btn btn-success mx-2 text-capitalize"
              >
                Recipe URL
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
