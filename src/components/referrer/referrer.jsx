import React, { Component } from "react";
import "./referrer.css";
import ReferrerNav from "./referrernav";
import PostReferral from "./postreferral";

class Referrer extends Component {
  state = {
    imagefeed:
      "https://bioprotect.com/wp-content/uploads/2017/10/maya-profile-round.jpg",
    imageApple:
      "https://cdn.iconscout.com/icon/free/png-256/microsoft-26-722716.png",
  };
  render() {
    return (
      <div className="outerBoxBox">
        <div className="container divClass">
          <div className="referralwindow">
            <ReferrerNav
              image={this.state.imagefeed}
              imageapple={this.state.imageApple}
            />
            <PostReferral />
          </div>
        </div>
      </div>
    );
  }
}

export default Referrer;
