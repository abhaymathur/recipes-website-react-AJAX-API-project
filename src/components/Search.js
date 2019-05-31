import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { current, handleChange, handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h2 className="col text-center text-slanted text-capitalize">
            search recipes with
            <span className="text-orange"> food2fork </span>
          </h2>
        </div>
        <div className="row">
          <h4 className="col text-center text-capitalize mt-3">
            type recipes separated by comma
          </h4>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="onions, marshmellow, lasagna"
                  value={current}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="input-group-append bg-primary text-white border border-0"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
