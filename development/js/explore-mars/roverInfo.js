import React, { Component } from "react";

import GetRoverInfo from './getRoverInfo';

import {
    Link,
} from 'react-router-dom';

export default class RoverInfo extends Component {
    render() {
        const { roverId } = this.props;
        
        return <>
            <section className='rover-info'>
                <Link to="/mars">
                    <span>Change rover</span>
                </Link>
                <div className='info'>
                    <img src={`../../images/${roverId}_rover.jpg`} />
                    <GetRoverInfo rover={roverId} target='roverInfo' />
                </div>
            </section>
        </>
    }
}