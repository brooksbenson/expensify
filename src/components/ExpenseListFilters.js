import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { updateFilters } from './../actions/filters';

class ExpenseListFilters extends React.Component {

  state = {
    calFocused: null
  }

  handleTextChange = (e) => {
    const {value} = e.target;
    this.props.dispatch(updateFilters({text: value}));
  }

  handleSortChange = (e) => {
    const {value} = e.target;
    this.props.dispatch(updateFilters({sortBy: value}));
  }

  handleDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(updateFilters({startDate, endDate}));
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

}

function mapStateToProps({filters}) {
  const {text, sortBy, startDate, endDate} = filters;
  return {text, sortBy, startDate, endDate};
}
export default connect(mapStateToProps)(ExpenseListFilters);