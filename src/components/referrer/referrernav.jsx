import React, { Component } from "react";
import "./referrernav.css";

class ReferrerNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="sidebar">
          <a href="#home">
            <i class="fa fa-handshake-o" aria-hidden="true"></i> Post referral
          </a>

          <a href="#services">
            <i className="fa fa-fw fa-wrench"></i> Referral Status
          </a>
          <a href="#clients">
            <i className="fa fa-fw fa-user"></i> Referral Network
          </a>
          <a href="#contact">
            <i className="fa fa-fw fa-envelope"></i> Feed
          </a>
        </div>
        <div className="nextopportunity">
          <span>Ready for next opportunity?</span>
          <hr></hr>
          <img
            src={this.props.image}
            width="52"
            height="52"
            className="imagesidenav"
          />{" "}
          <span>Mark has pending request</span>
          <button
            className="space jobs-search-box__submit-button artdeco-button artdeco-button--3 ml2"
            type="submit"
          >
            Follow
          </button>
          <hr></hr>
          <img
            src={this.props.imageapple}
            width="52"
            height="52"
            className="imagesidenav"
          />{" "}
          <span>Tina request for referral</span>
          <button
            className="space jobs-search-box__submit-button artdeco-button artdeco-button--3 ml2"
            type="submit"
          >
            Follow
          </button>
        </div>
      </div>
    );
  }
}

export default ReferrerNav;
