import React, { Component } from "react";

export default class LandingAnimation extends Component {
  state = {
    delay: false,
  };

  componentDidMount() {
    this.intervalId = setTimeout(() => {
      this.setState({ delay: true });
    }, 10);
  }

  render() {
    if (this.state.delay) {
      return (
        <>
          <div className="landing-animation">
            <div className="text1">
              <span>CHOOSE YOUR </span>
              <span>DESTINY...</span>
            </div>
          </div>
        </>
      );
    }
    return null;
  }
}
