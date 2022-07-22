import {ActionReducerMap} from '@ngrx/store';
import {_bulletinReducer} from './reducers/bulletin.reducers';
import {_commentReducer} from './reducers/comment.reducers';
import {_userReducer} from './reducers/user.reducers';
import {BulletinStates} from './states/bulletin.states';
import {CommentStates} from './states/comment.states';
import {UserStates} from './states/user.states';

export interface AppStates {
  user: UserStates
  bulletin: BulletinStates
  comment: CommentStates
}

export const ROOT_REDUCERS: ActionReducerMap<AppStates> = {
  user: _userReducer,
  bulletin: _bulletinReducer,
  comment: _commentReducer
}
