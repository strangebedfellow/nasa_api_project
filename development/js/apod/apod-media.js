import React, { Component } from "react";

export default class ApodMedia extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hdurl, url, media_type } = this.props;

        let mediaType;

        media_type === 'image'
            ? mediaType = <>
            
            <a href={hdurl} target='_blank' title="Click for HD Image">
            <div className='hd-image-info'>Click for HD image</div>
                <img src={url}></img>
            </a>
            </>
            : mediaType = <iframe width="800" height="600" src={url} allowfullscreen="allowfullscreen" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
// zmienic mediatype raz tak samo jak w apod date albo na ifa

        return <>
                <div className='media'>
                    {mediaType}
                </div>
        </>
    }
}