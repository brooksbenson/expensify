import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    
    const e = props.expense;
    this.state = {
      description: e ? e.description : '',
      amount: e ? (Number(e.amount) / 100).toString() : '',
      note: e ? e.note : '',
      createdAt: e ? moment(e.createdAt) : moment(),
      calFocused: false,
      error: false
    }
  }

  onDescriptionChange = (e) => {
    const {value} = e.target;
    this.setState(() => ({description: value}))
  }

  onAmountChange = (e) => {
    const {value} = e.target;
    const validator = /^\d*(\.\d{0,2})?$/;
    if (!value || validator.test(value)) {
      this.setState(() => ({amount: value}))
    }
  }

  onNoteChange = (e) => {
    const {value} = e.target;
    this.setState(() => ({note: value}))
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({createdAt}));
    }
  }

  onCalFocusChange = ({focused}) => {
    this.setState(() => ({calFocused: focused}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {description, amount, note, createdAt} = this.state;
    if (!description || !amount) {
      this.setState(() => ({error: true}))
    } else {
      this.props.onSubmit({
        description,
        note,
        amount: parseInt(amount) * 100,
        createdAt: createdAt.valueOf()
      });
      this.setState(() => ({
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calFocused: false,
        error: false
      }));
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <i> Please provide an amount and description </i>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          >
          </input>
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          >
          </input>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calFocused}
            onFocusChange={this.onCalFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <input type="submit" />
        </form> 
      </div>
    )
  }
}