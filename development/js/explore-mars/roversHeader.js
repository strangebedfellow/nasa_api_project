import React, { Component } from "react";
import { Link } from "react-router-dom";

import logoPng from "../../images/nasa_logo.svg";

export default class RoversHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ slide: (this.state.slide + 1) % 4 });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const directions = ["top", "center", "bottom", "center"];

    return (
      <>
        <header
          className="header mars-header"
          style={{
            backgroundPosition: directions[this.state.slide],
            transition: "background-position 3s ease-in-out",
          }}
        >
          {/* <Link to="/"><i className="fas fa-home"></i><span>homepage</span></Link> */}
          <img src={logoPng} />
          <h1>Explore Mars</h1>
        </header>
      </>
    );
  }
}
