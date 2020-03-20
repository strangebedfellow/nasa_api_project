import React, { Component } from "react";


import ChooseCam from './chooseCam';
import RoverInfo from './roverInfo';

export default class ExploreRover extends Component {

    render() {
        const { roverId } = this.props.match.params;
        return <>
            <RoverInfo roverId={roverId} />
            <ChooseCam rover={roverId} />
        </>
    }
}