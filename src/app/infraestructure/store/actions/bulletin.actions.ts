import {createAction, props} from '@ngrx/store';
import {Bulletin} from '../../../domain/models/bulletin/Bulletin'

const LOAD_BULLETINS: string = '[Bulletin / Bulletin Service] Load Bulletins';
const LOAD_BULLETINS_SUCCESS: string = '[Bulletin / Bulletin Service] Load Bulletins Success';
const CREATE_BULLETIN: string = '[Bulletin / Bulletin Service] Create bulletin';
const CREATE_BULLETIN_SUCCESS: string = '[Bulletin / Bulletin Service] Create bulletin success';
const REMOVE_BULLETIN: string = '[Bulletin] Remove bulletin';

export const loadBulletins = createAction(
  LOAD_BULLETINS,
  props<{ pageNo: number, pageSize: number }>()
);

export const loadBulletinsSuccess = createAction(
  LOAD_BULLETINS_SUCCESS,
  props<{ bulletins: Bulletin[] | null }>()
);

export const removeBulletin = createAction(
  REMOVE_BULLETIN,
  props<{ bulletinId: number }>()
);

export const createBulletin = createAction(
  CREATE_BULLETIN,
  props<{ bulletin: Bulletin }>()
);

export const createBulletinSuccess = createAction(
  CREATE_BULLETIN_SUCCESS,
  props<{ bulletin: Bulletin }>()
);




