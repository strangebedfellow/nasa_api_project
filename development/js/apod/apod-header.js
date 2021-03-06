import React, { Component } from "react";
import {
    Link,
} from 'react-router-dom';

import logoPng from "../../images/nasa-logo.png";

export default class ApodHeader extends Component {
    render() {
        return <>
            <header className="header apod-header" id='header'>
                <Link to="/"><i className="fas fa-home"></i><span>homepage</span></Link>
                <img src={logoPng} />
                <h1>astronomy picture of the day</h1>
            </header>
        </>
    }
}