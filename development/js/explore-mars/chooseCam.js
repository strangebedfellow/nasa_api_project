import React, { Component } from "react";

import GetSols from "./getSols";
import GetRoverInfo from "./getRoverInfo";

const getCams = {
  cams: ["FHAZ", "NAVCAM", "PANCAM", "MINITES", "ENTRY", "RHAZ"],
  perseveranceCams: [
    "EDL_RUCAM",
    "EDL_RDCAM",
    "EDL_DDCAM",
    "EDL_PUCAM1",
    "EDL_PUCAM2",
    "NAVCAM_LEFT",
    "NAVCAM_RIGHT",
    "MCZ_RIGHT",
    "MCZ_LEFT",
    "FRONT_HAZCAM_LEFT_A",
    "FRONT_HAZCAM_RIGHT_A",
    "REAR_HAZCAM_LEFT",
    "REAR_HAZCAM_RIGHT",
  ],
  curiosityCams: [
    "FHAZ",
    "RHAZ",
    "MAST",
    "CHEMCAM",
    "MAHLI",
    "MARDI",
    "NAVCAM",
  ],
  camsFull: [
    "Front Hazard Avoidance Camera",
    "Navigation Camera",
    "Panoramic Camera",
    "Miniature Thermal Emission Spectrometer (Mini-TES)",
    "Entry, Descent, and Landing Camera",
    "Rear Hazard Avoidance Camera",
  ],
  curiosityCamsFull: [
    "Front Hazard Avoidance Camera",
    "Rear Hazard Avoidance Camera",
    "Mast Camera",
    "Chemistry and Camera Complex",
    "Mars Hand Lens Imager",
    "Mars Descent Imager",
    "Navigation Camera",
  ],
  perseveranceCamsFull: [
    "Rover Up-Look Camera",
    "Rover Down-Look Camera",
    "Descent Stage Down-Look Camera",
    "Parachute Up-Look Camera A",
    "Parachute Up-Look Camera B",
    "Navigation Camera - Left",
    "Navigation Camera - Right",
    "Mast Camera Zoom - Right",
    "Mast Camera Zoom - Left",
    "Front Hazard Avoidance Camera - Left",
    "Front Hazard Avoidance Camera - Right",
    "Rear Hazard Avoidance Camera - Left",
    "Rear Hazard Avoidance Camera - Right",
  ],
};

export default class ChooseCam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameras: [],
      chosenCam: false,
    };
  }

  componentDidMount() {
    const roverCams = {
      curiosity: getCams.curiosityCams,
      perseverance: getCams.perseveranceCams,
    };
    const cameras = roverCams[this.props.rover] || getCams.cams;
    this.setState({ cameras, chosenCam: false });
  }

  handleChange = (e) => {
    this.setState({
      chosenCam: e.target.value,
    });
  };

  handleCamera = (id) => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight, "smooth");
    }, 200);
    this.setState({
      chosenCam: id,
    });
  };

  render() {
    const { cameras, chosenCam } = this.state;
    const { rover } = this.props;

    const fullName =
      rover == "curiosity"
        ? getCams.curiosityCamsFull
        : rover == "perseverance"
        ? getCams.perseveranceCamsFull
        : getCams.camsFull;

    return (
      <>
        <section className="choose-cam">
          <h1>{`${rover.toUpperCase()}'s cameras:`}</h1>
          <div className="cameras">
            {cameras.map((cam, index) => (
              <span
                key={index}
                value={cam}
                style={{
                  padding: "8px",
                  backgroundColor: "#595959",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => this.handleCamera(cam)}
              >
                {cam}
                {/* {cam}: {fullName[index]} */}
              </span>
            ))}
          </div>
          {chosenCam && <GetSols cam={chosenCam} rover={rover} />}
        </section>
      </>
    );
  }
}
