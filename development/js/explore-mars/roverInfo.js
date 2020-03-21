import React, { Component } from "react";

import GetRoverInfo from './getRoverInfo';

import {
    Link,
} from 'react-router-dom';

import curiosityRoverImg from "../../images/curiosity_rover.jpg";
import opportunityRoverImg from "../../images/opportunity_rover.jpg";
import spiritRoverImg from "../../images/spirit_rover.jpg";

export default class RoverInfo extends Component {
    render() {
        const { roverId } = this.props;

        const roverImg = (roverId == 'curiosity') ? curiosityRoverImg : (roverId == 'opportunity') ? opportunityRoverImg : spiritRoverImg;
        
        return <>
            <section className='rover-info'>
                <Link to="/mars">
                    <span>Change rover</span>
                </Link>
                <div className='info'>
                    <img src={roverImg} />
                    <GetRoverInfo rover={roverId} target='roverInfo' />
                </div>
            </section>
        </>
    }
}