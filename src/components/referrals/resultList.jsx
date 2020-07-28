import React, { Component } from "react";
import DerivedList from "./derivedlist";
import "./resultlist.css";
import FormDialog from "./FormDialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

class ResultList extends Component {
  render() {
    switch (this.props.visibilityOfList) {
      case 0:
        return <div></div>;
      case 1:
        return (
          <div>
            <div className="tile">
              {this.props.names.map((name) => (
                <DerivedList
                  key={name.id}
                  name={name}
                  handleRequestButton={this.handleRequestButton}
                />
              ))}
            </div>
          </div>
        );
    }
  }

  handleRequestButton = (nameObj) => {
    console.log(nameObj);
  };
}

export default ResultList;
