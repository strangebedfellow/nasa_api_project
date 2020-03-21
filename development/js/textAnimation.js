import React, { Component } from "react";

export default class TextAnimation extends Component {
    state = {
        delay: false
    }

    componentDidMount() {
        this.intervalId = setTimeout(() => {
            this.setState({ delay: true });
        }, 1000);
    }

    render() {
        if (this.state.delay) {
            return <>
                <div className='text-animation'>
                    <h1 className='bracket'>{'|'}</h1>
                    <div className='central'>
                        <p><span>NASA</span><span> API</span></p>
                        <p>CL_project by Mirosław Pajor</p>
                    </div>
                    <h1 className='bracket'>{'|'}</h1>
                </div>
            </>
        }
        return null
    }
}