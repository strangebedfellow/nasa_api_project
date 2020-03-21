import React, { Component } from "react";
import Calendar from 'react-calendar';

import SmoothCollapse from '../../../node_modules/react-smooth-collapse/js/index';

export default class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeDate: false,
        }
    }

    changeDate = () => {
        this.setState(prevState => ({
            changeDate: !prevState.changeDate
        }))
    }

    onChange = date => {
        this.props.setNewDate(date);
    }

    render() {

        const { changeDate } = this.state;
        const { date, setNewDate } = this.props;
        const buttonText = changeDate ? 'Close' : 'Change date';
        const splitted = date.split('-');
        const acceptable = new Date(splitted[0], splitted[1] - 1, splitted[2]);

        return <>
            <section className='apod-date'>
                <div className='site_container'>
                    <p>Current date:</p>
                    <p>{date}</p>
                    <button className='calendar-btn' onClick={this.changeDate}>{buttonText}</button>
                    <SmoothCollapse expanded={changeDate}>
                        {changeDate && <Calendar onChange={this.onChange} value={acceptable} />}
                    </SmoothCollapse>
                    {/* {changeDate && <MyCalendar setNewDate={setNewDate} date={date} />} */}
                </div>
            </section>
        </>
    }
}

