import {createBulletin, loadBulletins, loadBulletinsSuccess} from '../actions/bulletin.actions';
import {BulletinStates} from '../states/bulletin.states';
import {createReducer, on} from '@ngrx/store';

export const initialState: BulletinStates = {loadingList: false, bulletins: [], pageNo: 0, pageSize: 5};

export const _bulletinReducer = createReducer(
  initialState,
  on(loadBulletins, (state) => {
    return {...state, loading: true};
  }),
  on(loadBulletinsSuccess, (state, {bulletins}) => {
    return {...state, loading: false, bulletins: bulletins}
  }),
  on(createBulletin, (state, {bulletin}) => {
    return {...state, bulletins: [...state.bulletins!, bulletin]}
  })
);

