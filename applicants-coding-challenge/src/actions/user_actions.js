import * as APIUtil from '../util/user_api';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const receiveUsers = allUsers => ({
  type: RECEIVE_USERS,
  allUsers,
});
export const editUser = users => ({
  type: UPDATE_USER,
  users,
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(response => response.json())
    .then(users => (dispatch(receiveUsers(users))
  ))
);
// Specific updates: to add the coding test to admit/deny students
export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(response => response.json())
    .then(user => (dispatch(editUser(user))
  ))
);
// Purpose: to admit or deny students
// export const applicationDecision = user => dispatch => (
//   APIUtil.updateUser(user).then(response => response.json())
//     .then(user => (dispatch(editUser(user))
//   ))
// );
export const createUser = user => dispatch => (
  APIUtil.createUser(user).then(response => response.json())
    .then(user => (dispatch(receiveUsers(user))
  ))
);

