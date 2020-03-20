import React, { Component } from "react";
import {
    Link,
} from 'react-router-dom';

import logoPng from "../../images/nasa-logo.png";

export default class RoversHeader extends Component {
    render() {
        return <>
        <header className="header mars-header">
                <Link to="/"><i class="fas fa-home"></i><span>homepage</span></Link>
                <img src={logoPng} />
                <h1>Explore Mars with NASA API</h1>
            </header>
        </>
    }
}