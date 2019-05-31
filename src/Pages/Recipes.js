import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recipeData: recipeData,
    current: ""
  };
  handleChange = e => {
    this.setState({
      current: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    //console.log(this.state.allrecipedata);
    return (
      <>
        <Search
          current={this.state.current}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <RecipeList recipeData={this.state.recipeData} />
      </>
    );
  }
}
