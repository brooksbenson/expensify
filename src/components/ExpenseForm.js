import React from 'react';

export default class ExpenseForm extends React.Component {

  state = {
    description: '',
    amount: '',
    note: ''
  }

  onDescriptionChange = (e) => {
    const {value} = e.target.value;
    this.setState(() => ({description: value}))
  }

  onAmountChange = (e) => {
    const {value} = e.target.value;
    this.setState(() => ({amount: value}))
  }

  onNoteChange = (e) => {
    const {value} = e.target.value;
    this.setState(() => ({note: value}))
  }

  render() {
    const { description, amount, note } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          >
          </input>
          <input
            type="text"
            placeholder="amount"
            value={amount}
            onChange={this.onAmountChange}
          >
          </input>
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={this.onNoteChange}
          >
          </textarea>
        </form> 
      </div>
    )
  }
}