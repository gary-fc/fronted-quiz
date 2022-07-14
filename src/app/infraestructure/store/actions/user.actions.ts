import {createAction, props} from '@ngrx/store';
import {Authorization} from '../../../domain/models/user/Authorization';
import {Credentials} from '../../../domain/models/user/Credentials';
import {User} from '../../../domain/models/user/User';

export const userLogin = createAction(
  '[USER] User Login',
  props<{ credentials: Credentials }>()
);

export const userLoginSuccess = createAction(
  '[USER] User Login Success',
  props<{ auth: Authorization }>()
);

export const loadUser = createAction(
  '[USER] Load User',
  props<{ user: User }>()
)
