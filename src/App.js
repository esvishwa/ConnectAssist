import React, { Component } from "react";
import "./App.css";
import Forms from "./components/form/forms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkedInTimelineMain from "./components/LinkedInTimeline/LinkedInTimelineMain";
import Referrals from "./components/referrals/referrals";
import NavBar from "./components/navbar/navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LinkedInTimelineMain} />
          <Route path="/referrals" exact component={Referrals} />
        </Switch>
      </Router>
    );
  }
}

export default App;
