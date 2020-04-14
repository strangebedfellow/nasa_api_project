import React, { Component } from "react";

import ApodMedia from './apod-media';
import ApodExplanation from './apod-explanation';
import ApodDate from './apod-date';
import ApodTitle from './apod-title';

export default class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: false,
            date: new Date(),
            respOk: true,
            timeout: 500
        }
    }

    setNewDate = (newDate) => {
        this.setState({ date: newDate, apod: false })
    }

    loadApod = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=bbzRlTRJrs9o397HpwAHRnXIVsGV1qHrXmotzpMB&date=${this.state.date.getFullYear()}-${this.state.date.getMonth() + 1}-${this.state.date.getDate()}`)
            .then(resp => {
                if (resp.ok)
                    return resp.json();
                else this.setState({ respOk: false });
            })
            .then(resp => {
                this.setState({ apod: resp });
            }
            );
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.loadApod();
        }, this.state.timeout);

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.date != this.state.date) {
            this.timeoutId = setTimeout(() => {
                this.loadApod();
            }, this.state.timeout);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    refreshPage = () => {
        window.location.reload();
    }

    render() {

        const { apod, respOk } = this.state;
        const today = new Date();

        if (!respOk) {
            return <>
                <div className='loading-data'>
                    <i class="far fa-frown"></i>
                    <h1>No data available for this date</h1>
                    <h2>{`Please choose another date between 1995-06-16 & ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`}</h2>
                    <button onClick={this.refreshPage}>Go back</button>
                </div>
            </>
        }

        if (!apod) {
            return <>
                <div className='loading-data'>
                    <h1>Loading data...</h1>
                    <div className="lds-roller">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </>
        }

        return <>
            <ApodDate date={apod.date} setNewDate={this.setNewDate} />
            <ApodTitle title={apod.title} />
            <section className='apod-object'>
                <ApodMedia media_type={apod.media_type} url={apod.url} hdurl={apod.hdurl} />
                <ApodExplanation text={apod.explanation} />
            </section>
        </>
    }
}