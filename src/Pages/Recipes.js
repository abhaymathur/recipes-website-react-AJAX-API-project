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
      "https://www.food2fork.com/api/search?key=90437d065844e75f686279e5e0f618fa",
    baseurl:
      "https://www.food2fork.com/api/search?key=90437d065844e75f686279e5e0f618fa",
    query: "&q=",
    error: ""
  };

  async getrecipe() {
    try {
      const data = await fetch(this.state.url);
      const jsondata = await data.json();
      this.setState({
        recipeData: jsondata.recipes
      });
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

        <RecipeList recipeData={this.state.recipeData} />
      </>
    );
  }
}
