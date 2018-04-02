import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

const altFilters = {
  text: 'car',
  sortBy: 'amount',
  startDate: moment(),
  endDate: moment().add(3, 'days')
};

export {filters, altFilters};