import React, { Component } from "react";
import MyCalendar from './calendar'

export default class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeDate: false,
            openCalendar: false
        }
    }

    changeDate = () => {
        this.setState(prevState => ({
            changeDate: !prevState.changeDate,
            openCalendar: !prevState.openCalendar
        }))
    }

    render() {

        const { changeDate, openCalendar } = this.state;
        const { date, setNewDate } = this.props;
   
        const buttonText = openCalendar ? 'Close' : 'Change date';

        return <>
            <section className='apod-date'>
                <div className='site_container'>
                    <p>Current date:</p>
                    <p>{date}</p>
                    <button className = 'calendar-btn' onClick={this.changeDate}>{buttonText}</button>
                    {changeDate ? <MyCalendar setNewDate={setNewDate} /> : null}
                    {/* {zmienic na &&} */}
                </div>
            </section>
        </>



    }
}

