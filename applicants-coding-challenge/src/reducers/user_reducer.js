import merge from 'lodash/merge';

import { RECEIVE_USERS, UPDATE_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USERS:
      const users = { users: action.allUsers } ;
      return users;
    case UPDATE_USER:
      const newState = merge({}, state);
      newState.users[action.user.id] = action.user;
      return newState;
    
    default:
      return state;
  }
};

export default userReducer;

