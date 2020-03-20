import React, { Component } from "react";

export default class ApodExplanation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 20);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return <>               
                <div className='explanation'>{this.props.text.slice(0, this.state.count)}</div>
        </>
    }
}