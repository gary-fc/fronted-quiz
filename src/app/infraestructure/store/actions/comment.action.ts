import {createAction, props} from '@ngrx/store';
import {Comment} from '../../../domain/models/comment/Comment';
import {CommentResponse} from '../../../domain/models/comment/CommentResponse';

const LOAD_COMMENT: string = '[Comment / Comment Service] Load Comments';
const LOAD_COMMENT_SUCCESS: string = '[Comment / Comment Service] Load Comments Success';
const CREATE_COMMENT: string = '[Comment / Comment Service] Create Comment';
const CREATE_COMMENT_SUCCESS: string = '[Comment / Comment Service] Create Comment Success'

export const loadComments = createAction(
  LOAD_COMMENT,
  props<{ bulletinId: number }>()
);

export const loadCommentsSuccess = createAction(
  LOAD_COMMENT_SUCCESS,
  props<{ comments: CommentResponse[] | null }>()
);

export const createComment = createAction(
  CREATE_COMMENT,
  props<{ bulletinId: number, comment: Comment }>()
);

export const createCommentSuccess = createAction(
  CREATE_COMMENT_SUCCESS,
  props<{ comment: CommentResponse }>()
);
