import React, { Component } from "react";
import Calendar from 'react-calendar';
//import '../../node_modules/react-calendar/dist/Calendar.css'

export default class MyCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => {
    this.setState({ date });
    this.props.setNewDate(date);
  }

  render() {
    const { date } = this.state;
    return (
      <div className='calendar'>
        <Calendar onChange={this.onChange} value={date} />
      </div>
    );
  }
}
