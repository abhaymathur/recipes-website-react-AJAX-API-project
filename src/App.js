import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes.js";
import SingleRecipe from "./Pages/SingleRecipe.js";
import Default from "./Pages/Default.js";
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
