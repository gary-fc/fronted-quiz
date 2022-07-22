import {createReducer, on} from '@ngrx/store';
import {createBulletinSuccess, loadBulletins, loadBulletinsSuccess} from '../actions/bulletin.actions';
import {bulletinEntityAdapter} from '../adapters/bulletin.adapter';
import {BulletinStates} from '../states/bulletin.states';

export const initialState: BulletinStates = bulletinEntityAdapter.getInitialState();

// export const bulletinFeature = createFeature({
//   name: 'bulletins',
//   reducer: createReducer(
//     initialState,
//     on(loadBulletins, (state) => {
//       return {...state, loadingList: true};
//     }),
//     on(loadBulletinsSuccess, (state, {bulletins}) => {
//       return bulletinEntityAdapter.addMany(bulletins!, {...state, loadingList: false})
//     }),
//     on(createBulletin, (state, {bulletin}) => {
//       return bulletinEntityAdapter.addOne(bulletin!, {...state})
//     }),
//   ),
// });

export const _bulletinReducer = createReducer(
  initialState,
  on(loadBulletins, (state) => {
    return {...state, loadingList: true};
  }),
  on(loadBulletinsSuccess, (state, {bulletins}) => {
    return bulletinEntityAdapter.addMany(bulletins!, {...state, loadingList: false})
  }),
  on(createBulletinSuccess, (state ,{bulletin})=>{
    return bulletinEntityAdapter.addOne(bulletin!, {...state})
  })
);

