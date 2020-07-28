import React, { Component } from "react";

import "./searchbar.css";
import ResultList from "./resultList";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="outerBox">
        <h4 className="searchHead">
          Welcome Jason! Here are some referrals for you
        </h4>
        <h6 className="filter">Filter Results?</h6>
        <div className="searchOptions">
          <form>
            <input
              type="text"
              placeholder="Search by title, skill, or company"
              className="titlesearchbar"
            />
            <input
              type="text"
              placeholder="City, state, or zip code"
              className="titlesearchbar"
            />

            <button
              className="jobs-search-box__submit-button artdeco-button artdeco-button--3 ml2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
