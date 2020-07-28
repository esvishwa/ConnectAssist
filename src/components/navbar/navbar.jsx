import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./navbarstyle.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
		<html>
		<head>
		<title>ConnectAssist</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		</head>

		<body>
        <div class="topnav">

        <div class="navbar">
        <a class="navbar-brand iconmain" href="#">
			<img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" width="70" height="70" alt="LinkedIn Home Icon" />
		</a>
		<input class="searchinput" type="search" placeholder="Search" aria-label="Search" />
		<a href="#"><i class="fa fa-fw fa-home"></i>Home</a> 
		<a href="#"><i class="fa fa-fw fa-users"></i>My Network</a> 
		<a href="#"><i class="fa fa-fw fa-briefcase"></i>Jobs</a> 
		<a href="#"><i class="fa fa-fw fa-envelope"></i>Messages</a>
		<a href="#"><i class="fa fa-fw fa-bell"></i>Notifications</a>
		<Link to="/referrals"><a href="#"><i class="fa fa-fw fa-link"></i>Referrals</a></Link>
		</div>

		</div>

		</body>
		</html>
    );
  }
}

export default NavBar;