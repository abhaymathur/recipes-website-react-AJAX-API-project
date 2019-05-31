import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allrecipedata: recipeData,
      current: ""
    };
  }

  handleChange = e => {
    this.setState({
      current: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        {/* <div className="container border border-dark">
          <div className="row border border-primary">
            <div className="col"> */}
        <Search
          current={this.state.current}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* </div>
          </div>

          <div className="row">
            <div className="col"> */}
        <RecipeList allrecipedata={this.state.allrecipedata} />
        {/* </div>
          </div>
        </div> */}
      </>
    );
  }
}
