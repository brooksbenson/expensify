import React from 'react';
import { DateRangePicker } from 'react-dates';

export default class ExpenseListFilters extends React.Component {

  state = {
    calFocused: null
  }

  handleTextChange = (e) => {
    const {value} = e.target;
    this.props.updateFilters({text: value});
  }

  handleSortChange = (e) => {
    const {value} = e.target;
    this.props.updateFilters({sortBy: value});
  }

  handleDatesChange = ({startDate, endDate}) => {
    this.props.updateFilters({startDate, endDate});
  }

  handleCalFocusChange = (calFocused) => {
    this.setState(() => ({calFocused}))
  }

  render() {
    const {text, sortBy, startDate, endDate} = this.props;
    return (
      <div>
        <input type="text" value={text} onChange={this.handleTextChange}/>
        <select value={sortBy} onChange={this.handleSortChange} >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calFocused}
          onFocusChange={this.handleCalFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={day => false}
        />
      </div>
    )
  }

};