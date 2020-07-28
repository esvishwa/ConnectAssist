import React, { Component } from "react";
import "./referralstyle.css";
import ResultList from "./resultList.jsx";
import SearchBar from "./searchBar";
import SideNav from "./sideNav";

class ReferralClass extends Component {
  state = {
    visibilityOfList: 1,
    requestButtonFlag: 1,
    imagefeed:
      "https://bioprotect.com/wp-content/uploads/2017/10/logo-back-white.png",
    imageApple:
      "https://bioprotect.com/wp-content/uploads/2017/10/circlesback5.png",

    names: [
      {
        id: 1,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://bioprotect.com/wp-content/uploads/2017/10/maya-profile-round.jpg",
      },
      {
        id: 2,
        name: "James Adam",
        company: "Google",
        location: "Seattle,US",
        img:
          "https://cdn.iconscout.com/icon/free/png-256/microsoft-26-722716.png",
      },
      {
        id: 3,
        name: "Ross Geller",
        company: "Google",
        location: "San Francisco,US",
        img: "https://bioprotect.com/wp-content/uploads/2017/10/avivit.png",
      },
      {
        id: 4,
        name: "Anjali Desai",
        company: "Google",
        location: "San Francisco,US",
        img: "https://bioprotect.com/wp-content/uploads/2017/10/avivit.png",
      },
      {
        id: 5,
        name: "Anna Bell",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 6,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img: "https://bioprotect.com/wp-content/uploads/2017/10/avivit.png",
      },
      {
        id: 7,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img: "https://bioprotect.com/wp-content/uploads/2017/10/avivit.png",
      },
      {
        id: 8,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 9,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 10,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 11,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 12,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 13,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 14,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
      {
        id: 15,
        name: "Mark Manson",
        company: "Google",
        location: "San Francisco,US",
        img:
          "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png",
      },
    ],
  };

  render() {
    return (
      <div className="outerBoxBox">
        <div className="container divClass">
          <SearchBar visibilityOfList={this.state.visibilityOfList} />
          <div className="referralwindow">
            <SideNav
              image={this.state.imagefeed}
              imageapple={this.state.imageApple}
            />
            <ResultList
              visibilityOfList={this.state.visibilityOfList}
              names={this.state.names}
            />
          </div>
        </div>
      </div>
    );
  }
  visibilityOfList = (number) => {
    this.visibilityOfList = number;
  };
}

export default ReferralClass;
