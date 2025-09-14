import React, { Component } from "react";
import { Link } from "react-router-dom";

import Tooltip from "./tooltip";

export default class ChooseRover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rover, img } = this.props;
    return (
      <>
        <div className="rover">
          <Link to={`/mars/${rover}`}>
            <div className="tooltip">
              <p>{rover}</p>
              <p>
                <span>(INFO)</span>
              </p>
              <Tooltip rover={rover} />
            </div>
            <img src={img} style={{ width: "100%", height: "auto" }}></img>
          </Link>
        </div>
      </>
    );
  }
}
