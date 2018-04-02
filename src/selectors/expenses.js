import moment from 'moment';

export default function(expenses, { text, startDate, endDate, sortBy }) {
  const search = new RegExp(text, 'i');
  return expenses.filter(e => {
    const createdAt = moment(e.createdAt);
    const textMatch = search.test(e.description) || search.test(e.note);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
    if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
  });
}