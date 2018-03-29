import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from './../actions/filters';

function ExpenseListFilters({dispatch, text, sortBy}) {

  function handleTextChange(e) {
    const {value} = e.target;
    dispatch(updateFilters({text: value}));
  }

  function handleSortChange(e) {
    const {value} = e.target;
    dispatch(updateFilters({sortBy: value}));
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange}/>
      <select onChange={handleSortChange} value={sortBy}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  )
}

function mapStateToProps({filters}) {
  const {text, sortBy} = filters;
  return {text, sortBy};
}
export default connect(mapStateToProps)(ExpenseListFilters);