import React, { Component } from "react";
import sidenav from "./sidenav.css";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="sidebar">
          <a href="#home">
            <i className="fa fa-fw fa-search"></i> Browse Referrals
          </a>
          <a href="#services">
            <i className="fa fa-fw fa-wrench"></i> Referral Status
          </a>
          <a href="#clients">
            <i className="fa fa-fw fa-user"></i> Register as referrer
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
          <span>
            Jason, <b>Bio Protect</b> Is hiring
          </span>
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
          <span>
            Jason, <b>Genify Pro</b> Is hiring
          </span>
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

export default SideNav;
