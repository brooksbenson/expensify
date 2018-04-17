import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    
    const e = props.expense;
    this.state = {
      description: e ? e.description : '',
      amount: e ? (e.amount / 100).toString() : '',
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
      this.setState(() => ({error: true}));
    } else {
      this.setState(() => ({error: false}));
      this.props.onSubmit({
        description,
        note,
        amount: Math.round(Number(amount) * 100),
        createdAt: createdAt.valueOf()
      })
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error"> Please provide an amount and description </p>}
        <input
          type="text"
          placeholder="description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        >
        </input>
        <input
          type="text"
          placeholder="amount"
          className="text-input"
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
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <button className='button'>
          {this.props.expense ? 'Save Expense' : 'Add Expense' }
        </button>
      </form> 
    );
  }
}