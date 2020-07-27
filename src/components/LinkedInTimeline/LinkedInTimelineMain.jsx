import React, { Component } from "react";
import NavBar from "../navbar/navbar";
import Feeds from "../feeds/feeds";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Referrals from "../referrals/referrals";

class LinkedInTimelineMain extends Component {
  state = {};
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Feeds />
      </div>
    );
  }
}

export default LinkedInTimelineMain;
