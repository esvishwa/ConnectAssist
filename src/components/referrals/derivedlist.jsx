import React, { Component } from "react";
import "./derivedlist.css";
import SimpleDialogDemo from "./SimpleDialogDemo";

class DerivedList extends Component {
  state = {};
  render() {
    return (
      <div className="tileblock">
        <div className="containertile col-md-9">
          <div className="imagediv">
            <img
              src={this.props.name.img}
              width="52"
              height="52"
              className="profilepicture"
            />
          </div>

          <div className="namediv">
            <span className="recruiterName">{this.props.name.name}</span>
          </div>

          <div className="companydiv">
            <p className="recruiterCompany">{this.props.name.company}</p>
          </div>

          <div className="locationdiv">
            <p className="locationName">
              <img
                src="https://p7.hiclipart.com/preview/517/350/522/paper-google-map-maker-computer-icons-world-map-location-icon.jpg"
                width="14"
                height="14"
              />

              {this.props.name.location}
            </p>
          </div>

          <div className="buttondiv">
            <SimpleDialogDemo />
          </div>
        </div>
      </div>
    );
  }
}

export default DerivedList;
