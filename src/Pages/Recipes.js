import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getrecipe = this.getrecipe.bind(this);
  }

  state = {
    recipeData: recipeData,
    current: "",
    // url: `https://www.food2fork.com/api/search?key=${
    //   process.env.REACT_APP_API_KEY
    // }`,
    url:
      "https://www.food2fork.com/api/search?key=839cebe4fcccea1db3e928ca4a470ee9",
    baseurl:
      "https://www.food2fork.com/api/search?key=839cebe4fcccea1db3e928ca4a470ee9",
    query: "&q=",
    error: ""
  };

  async getrecipe() {
    try {
      const data = await fetch(this.state.url);
      const jsondata = await data.json();
      if (jsondata.recipes.length === 0) {
        this.setState({
          recipeData: {},

          error: `Sorry, we do not have any cuisine related to that keyword. Please try something else, or click on the search button to view top 30 recipes.`
        });
      } else {
        this.setState({
          recipeData: jsondata.recipes,
          error: ""
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getrecipe();
  }
  handleChange = e => {
    this.setState({
      current: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const requested = this.state.current;
    this.setState(
      {
        url: this.state.baseurl + this.state.query + requested,
        current: ""
      },
      () => this.getrecipe()
    );
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
        {this.state.error ? (
          <div className="row">
            <div className="col text-center mx-auto mt-5 text-orange mx-10 font-italic">
              <h4>{this.state.error}</h4>
            </div>
          </div>
        ) : (
          <RecipeList recipeData={this.state.recipeData} />
        )}
      </>
    );
  }
}
