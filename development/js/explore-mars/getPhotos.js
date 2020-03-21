import React, { Component } from "react";

export default class GetPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: false,
        }
    }

    fetchPhotos = () => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?sol=${this.props.sol}&camera=${this.props.camera}&api_key=ARzD4cZNCaa74QvzRgVlIhl6YjjOiASHbyCjDdce`)
            .then(resp => resp.json())
            .then(resp => this.setState({ photos: resp.photos })
            );
    }

    componentDidMount() {
        this.fetchPhotos();

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.camera != this.props.camera || prevProps.sol != this.props.sol) {
            this.fetchPhotos();
        }
    }

    render() {
        
        const { photos } = this.state; 
        console.log(photos);      

        if (!photos) {
            return <>
                <h1>Loading photos...</h1>
                <br/>
            </>
        }

        else {
            return <>
                <section className='get-photos'>
                    <ul>
                        {photos.map((e, index) => <>
                            <li key={e.id}>
                                <p>Camera: {e.camera.full_name}</p>
                                <p>Earth date: {e.earth_date}</p>
                                <img src={e.img_src} />
                            </li>
                        </>)}
                    </ul>
                </section>
            </>
        }
    }
}