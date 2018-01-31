import merge from 'lodash/merge';

import { RECEIVE_USERS, UPDATE_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.allUsers;
      return users;
    case UPDATE_USER:
      const user = action.user;
      return user;    
    default:
      return state;
  }
};

export default userReducer;

