import React, { Component } from "react";

export default class LandingAnimation extends Component {
    state = {
        delay: false
    }

    componentDidMount() {
        this.intervalId = setTimeout(() => {
            this.setState({ delay: true });
        }, 10);
    }

    render() {
        if (this.state.delay) {
            return <>
                <div className='landing-animation'>
                    <div className='text1'>
                        <span>NASA </span>
                        <span>API</span>
                    </div>
                    <hr></hr>
                    <div className='text2'>
                        by Mirosław Pajor
                    </div>
                </div>
            </>
        }
        return null
    }
}