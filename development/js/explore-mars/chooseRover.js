import React, { Component } from "react";

import Rover from './rover';

import curiosityImg from '../../images/cur.png';
import perseveranceImg from '../../images/pers.png';

export default class ChooseRover extends Component {
    render() {
        return <>
            <section className='choose-rover'>
                <div className='choose-rover-title'>
                    <h1>Choose a rover to explore</h1>
                </div>
                <div className='rovers'>
                    <Rover rover='perseverance' img={perseveranceImg} />
                    <Rover rover='curiosity' img={curiosityImg} />
                    {/* <Rover rover='opportunity' img={opportunityImg} />
                    <Rover rover='spirit' img={spiritImg} /> */}
                </div>
            </section>
        </>
    }
}