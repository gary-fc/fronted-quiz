import {createReducer, on} from '@ngrx/store';
import {loadUser, userLogin, userLoginSuccess} from '../actions/user.actions';
import {UserStates} from '../states/user.states';

export const userInitialState: UserStates = {
  user: null,
  credentials: null,
  authorization: null,
};

export const _userReducer = createReducer(
  userInitialState,

  on(userLogin, (state, {credentials}) => ({
    ...state,
    credentials: {...credentials}
  })),

  on(userLoginSuccess, (state, {auth}) => ({
    ...state,
    authorization: {...auth}
  })),

  on(loadUser, (state, {user}) => ({
    ...state,
    user: {...user}
  }))
);
