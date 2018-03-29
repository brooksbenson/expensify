export default function(expenses, { text, startDate, endDate, sortBy }) {
  const search = new RegExp(text, 'i');
  return expenses.filter(e => {
    const textMatch = search.test(e.description) || search.test(e.note);
    const startDateMatch = startDate ? e.createdAt > startDate : true;
    const endDateMatch = endDate ? e.createdAt < endDate : true;
    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
    if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
  });
}