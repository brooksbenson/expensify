import authReducer from '../../reducers/auth';
import { login, logout } from '../../actions/auth';

test('should set uid for login', () => {
  const uid = '123';
  const action = login(uid);
  const store = authReducer({}, action);
  expect(store.uid).toEqual(uid);
});

test('should clear uid for logout', () => {
  const action = logout();
  const store = authReducer({ uid: '123' }, action);
  expect(store.uid).toBeFalsy();
});