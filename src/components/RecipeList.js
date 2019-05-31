import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  render() {
    const { recipeData = [] } = this.props;
    //recipeData = recipeData.push(3);

    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>

          <div className="row">
            {recipeData.map(item => (
              <Recipe key={item.recipe_id} item={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
