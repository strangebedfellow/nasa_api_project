import React, { Component } from "react";

import GetPhotos from './getPhotos'

export default class GetSols extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sol: false,
            sols: false
        }
    }

    fetchSols = () => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${this.props.rover}?api_key=ARzD4cZNCaa74QvzRgVlIhl6YjjOiASHbyCjDdce`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({ sols: resp.photo_manifest.photos.filter(e => e.cameras.includes(`${this.props.cam}`.toUpperCase())), sol: false });
            }
            );
    }

    componentDidMount() {
        this.fetchSols()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cam != this.props.cam) {
            this.fetchSols();
            this.setState({ sols: false })
        }
    }

    handleChange = (e) => this.setState({ sol: e.target.value });

    render() {
        const { sol, sols } = this.state;
        const { cam, rover } = this.props;

        if (!sols) {
            return <>
                <h1>Loading sols...</h1>
                <br />
            </>
        }
        else {
            return <>
                <select onChange={this.handleChange}>
                    <option value='' hidden>Choose sol</option>
                    {sols.map((e, index) => <option key={index} value={e.sol}>{e.sol}</option>)}
                </select>
                {sol && <GetPhotos camera={cam} rover={rover} sol={sol} />}
            </>
        }
    }
}