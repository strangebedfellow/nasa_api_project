import React, { Component } from "react";
// funkcja zamiast komponentu do fetchowania
export default class GetRoverInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roverInfo: false
        }
    }

    fetchInfo = () => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${this.props.rover}?api_key=ARzD4cZNCaa74QvzRgVlIhl6YjjOiASHbyCjDdce`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({ roverInfo: resp });
            }
            );
    }

    componentDidMount() {
        this.fetchInfo()
    }

    render() {
        const { roverInfo } = this.state;
        const rover = this.state.roverInfo.photo_manifest;

        if (!roverInfo) {
            return null
        }

        if (this.props.target == 'roverInfo') {
            return <>
                <div className='get-rover-info'>
                    <h1>{`${this.props.rover} rover`}</h1>
                    <p>Launch date: <span>{rover.launch_date}</span></p>
                    <p>Landing date: <span>{rover.landing_date}</span></p>
                    <p>Status: {rover.status == 'active' ?
                        <span style={{ color: "green", fontWeight: 'bold'}}>{rover.status}</span> :
                        <span style={{ color: "red", fontWeight: 'bold'}}>{rover.status}</span>}</p>
                    <p>Total photos: <span>{rover.total_photos}</span></p>
                </div>
            </>
        }

        if (this.props.target == 'cameras') {
            return <>
                <div className='get-rover-info'>
                   
                </div>
            </>
        }

        return <>
            <div className="tooltip-down">
                <p>Launch date: <span>{rover.launch_date}</span></p>
                <p>Landing date: <span>{rover.landing_date}</span></p>
                <p>Status: {rover.status == 'active' ?
                    <span style={{ color: "green", fontSize: '1.5rem'}}>{rover.status}</span> :
                    <span style={{ color: "red", fontSize: '1.5rem'}}>{rover.status}</span>}</p>
                <p>Total photos: <span>{rover.total_photos}</span></p>
            </div>
        </>
    }
}