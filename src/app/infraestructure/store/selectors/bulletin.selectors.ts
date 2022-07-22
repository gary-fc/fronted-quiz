import {Bulletin} from '../../../domain/models/bulletin/Bulletin';
import {User} from '../../../domain/models/user/User';
import {bulletinEntityAdapter} from '../adapters/bulletin.adapter';
import {AppStates} from '../app.states';
import {BulletinStates} from '../states/bulletin.states';
import {UserStates} from '../states/user.states';
import {createSelector} from '@ngrx/store'

export const selectLoadBulletinFeature = (state: AppStates) => state.bulletin;

const bulletinSelectors = bulletinEntityAdapter.getSelectors();

export const selectBulletins = createSelector(
  selectLoadBulletinFeature,
  bulletinSelectors.selectAll
);

// export const selectCreateBulletin = createSelector(
//   selectLoadBulletinFeature, (state: BulletinStates): Bulletin[] | null => state
// );

// export const selectLoadBulettins = createSelector(
//   selectLoadBulletinFeature, (state: BulletinStates): Bulletin[] | null => state.bulletins
// );
