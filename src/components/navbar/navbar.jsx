import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./navbarstyle.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div id="bb">
        <div className="topnav">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <a className="navbar-brand iconmain" href="#">
            <img
              src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png"
              width="70"
              height="70"
              alt="here"
            />
          </a>
          <input
            className="searchinput"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Link to="/referrals">
            <i className="fa fa-fw fa-link referralicon">
              <span className="referralText">Referral</span>
            </i>
          </Link>
          <a href="#news">
            <i className="fa fa-fw fa-user usericon ">
              <span className="referralText">Network</span>
            </i>
          </a>
          <a href="#contact">
            <i className="fa fa-fw fa-bell bellicon">
              <span className="notificationText">Notifications</span>
            </i>
          </a>

          <a href="#about" className="active">
            <i className="fa fa-fw fa-home apiicon">
              <span className="referralText">Home</span>
            </i>
          </a>
          <a href="#news">
            <i className="fa fa-comments-o messageicon" aria-hidden="true">
              <span className="referralText">Messages</span>
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
