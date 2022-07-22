import {createAction, props} from '@ngrx/store';
import {Authorization} from '../../../domain/models/user/Authorization';
import {Credentials} from '../../../domain/models/user/Credentials';
import {User} from '../../../domain/models/user/User';

const USER_LOGIN: string = '[USER API] User Login';
const USER_LOGIN_SUCCESS: string = '[USER API] User Login Success';
const LOAD_USER: string = '[USER API] Load User';

export const userLogin = createAction(
  USER_LOGIN,
  props<{ credentials: Credentials }>()
);

export const userLoginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<{ auth: Authorization }>()
);

export const loadUser = createAction(
  LOAD_USER,
  props<{ user: User }>()
)
