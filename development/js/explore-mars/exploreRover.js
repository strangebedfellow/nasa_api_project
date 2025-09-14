import React, { Component } from "react";

import ChooseCam from "./chooseCam";
import RoverInfo from "./roverInfo";

export default class ExploreRover extends Component {
  render() {
    const { roverId } = this.props.match.params;
    return (
      <div style={{ minHeight: "70vh", backgroundColor: "#1f1f1f" }}>
        <RoverInfo roverId={roverId} />
        <ChooseCam rover={roverId} />
      </div>
    );
  }
}
