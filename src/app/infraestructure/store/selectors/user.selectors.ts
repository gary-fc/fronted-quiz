import {User} from '../../../domain/models/user/User';
import {AppStates} from '../app.states';
import {createSelector} from '@ngrx/store';
import {UserStates} from '../states/user.states';


export const selectLoadUserFeature = (state: AppStates) => state.user;

export const selectLoadUser = createSelector(
  selectLoadUserFeature, (state: UserStates): User | null => state.user
);
