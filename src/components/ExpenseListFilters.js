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
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input 
              className='text-input' 
              placeholder='Search expenses'
              type="text" 
              value={text} 
              onChange={this.handleTextChange}
            />
          </div>
          <div className='input-group__item'>
            <select className='select' value={sortBy} onChange={this.handleSortChange} >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className='input-group__item'>
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
        </div>
      </div>
    )
  }

};