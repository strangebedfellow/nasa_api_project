import React, { Component } from "react";

import GetSols from './getSols';
import GetRoverInfo from './getRoverInfo';

const getCams = {
    cams: ['FHAZ', 'NAVCAM', 'PANCAM', 'MINITES', 'ENTRY', 'RHAZ'],
    curiosityCams: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    camsFull: ['Front Hazard Avoidance Camera', 'Navigation Camera', 'Panoramic Camera', 'Miniature Thermal Emission Spectrometer (Mini-TES)', 'Entry, Descent, and Landing Camera', 'Rear Hazard Avoidance Camera'],
    curiosityCamsFull: ['Front Hazard Avoidance Camera', 'Rear Hazard Avoidance Camera', 'Mast Camera', 'Chemistry and Camera Complex', 'Mars Hand Lens Imager', 'Mars Descent Imager', 'Navigation Camera'] 
}

export default class ChooseCam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cameras: [],
            chosenCam: false,
            camChange: false
        }
    }

    componentDidMount() {
        if (this.props.rover === 'curiosity') {
            this.setState({ cameras: getCams.curiosityCams, chosenCam: false })
        }
        else {
            this.setState({ cameras: getCams.cams })
        }
    }

    handleChange = (e) => {
        this.setState({ chosenCam: e.target.value, camChange: !this.state.camChange });
    }

    render() {
        const { cameras, chosenCam, camChange } = this.state;
        const {rover} = this.props;

        const fullName = (rover == 'curiosity') ? getCams.curiosityCamsFull : getCams.camsFull;

        return <>
            <section className='choose-cam'>
                {/* <h1>{`${rover}'s Cameras`}</h1> */}
                <ul className='cameras'>
                    {cameras.map((e, index) => <li key={index} value={e} ><span>{e}</span>: {fullName[index]}</li>)}
                </ul>
                <select onChange={this.handleChange}>
                    <option value='' hidden>Choose Camera</option>
                    {cameras.map((e, index) => <option key={index} value={e} >{e}</option>)}
                </select>
                {chosenCam && <GetSols cam={chosenCam} rover={rover} />}
            </section>
        </>
    }
}