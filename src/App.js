import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkedInTimelineMain from "./components/LinkedInTimeline/LinkedInTimelineMain";
import Referrals from "./components/referrals/referrals";
import NavBar from "./components/navbar/navbar";
import Referrer from "./components/referrer/referrer";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LinkedInTimelineMain} />
          <Route path="/referrals" exact component={Referrals} />
          <Route path="/referrer" exact component={Referrer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
