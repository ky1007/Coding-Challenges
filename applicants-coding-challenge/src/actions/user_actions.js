import * as APIUtil from '../util/user_api';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const receiveUsers = allUsers => ({
  type: RECEIVE_USERS,
  allUsers,
});
export const editUser = user => ({
  type: UPDATE_USER,
  user,
});

export const fetchUsers = users => dispatch => (
  APIUtil.fetchUsers(users).then(response => response.json())
    .then(users => (dispatch(receiveUsers(users.json()))
  ))
);
export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(response => response.json())
    .then(user => (dispatch(editUser(user))
  ))
);
export const createUser = user => dispatch => (
  APIUtil.createUser(user).then(response => response.json())
    .then(user => (dispatch(receiveUsers(user))
  ))
);

