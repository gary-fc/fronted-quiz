import {createAction, props} from '@ngrx/store';
import {Bulletin} from '../../../domain/models/bulletin/Bulletin'


export const loadBulletins = createAction(
  '[Bulletin] Load Bulletins',
  props<{ pageNo: number, pageSize: number }>()
);

export const loadBulletinsSuccess = createAction(
  '[Bulletin] Load Bulletins Success',
  props<{ bulletins: Bulletin[] | null }>()
);

export const createBulletin = createAction(
  '[Bulletin] Create bulletin',
  props<{ bulletin: Bulletin }>()
);

export const createBulletinSuccess = createAction(
  '[Bulletin] Create bulletin success',
  props<{ bulletin: Bulletin }>()
);

export const removeBulletin = createAction(
  '[Bulletin] Remove bulletin',
  props<{ bulletinId: number }>()
);


