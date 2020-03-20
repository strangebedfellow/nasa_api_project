import React, { Component } from "react";
import GetRoverInfo from "./getRoverInfo";

export default class Tooltip extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <GetRoverInfo rover={this.props.rover} />
    }
}