import moment from 'moment';

export default [
  {
    id: '1',
    createdAt: moment().add(7, 'd').valueOf(),
    description: 'car wash',
    note: 'clean car',
    amount: 1000
  },
  {
    id: '2',
    createdAt: moment().add(3, 'd').valueOf(),
    description: 'pizza',
    note: 'good pizza',
    amount: 700
  },
  {
    id: '3',
    createdAt: moment().subtract(7, 'd').valueOf(),
    description: 'skateboard',
    note: 'good times',
    amount: 7000
  },
  {
    id: '4',
    createdAt: moment().subtract(3, 'd').valueOf(),
    description: 'xbox',
    note: 'new xbox',
    amount: 40000
  }
];