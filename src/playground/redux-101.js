import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'MODIFY_COUNT':
      return { count: state.count + action.amount };
    case 'SET_COUNT':
      return { count: action.count };
    default:
      return state;
  }
});

function modifyCount(amount = 1) {
  let type = 'MODIFY_COUNT';
  if (typeof amount != 'number') {
    type = null;
  }
  return { type, amount };
}

function setCount(count) {
  let type = 'SET_COUNT';
  if (count == undefined || typeof count != 'number') {
    type = null;
  }
  return { type, count };
}

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(modifyCount('test'));
store.dispatch(modifyCount(10));
store.dispatch(modifyCount(-7));
store.dispatch(setCount(100));