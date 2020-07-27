import React, { Component } from "react";

import "./searchbar.css";
import ResultList from "./resultList";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div class="outerBox">
        <h4 class="searchHead">Search for Referrals from networks</h4>

        <div>
          <form>
            <input
              type="text"
              placeholder="Search by title, skill, or company"
              class="titlesearchbar"
            />
            <input
              type="text"
              placeholder="City, state, or zip code"
              class="titlesearchbar"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
