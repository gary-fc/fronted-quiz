import {createReducer, on} from '@ngrx/store';
import {createCommentSuccess, loadComments, loadCommentsSuccess} from '../actions/comment.action';
import {commentEntityAdapter} from '../adapters/comment.adapter';
import {CommentStates} from '../states/comment.states';

export const initialState: CommentStates = commentEntityAdapter.getInitialState();

export const _commentReducer = createReducer(
  initialState,
  on(loadComments, (state) => {
    return {...state, loadingList: true};
  }),
  on(loadCommentsSuccess, (state, {comments}) => {
    return commentEntityAdapter.addMany(comments!, {...state, loadingList: false})
  }),
  on(createCommentSuccess, (state, {comment}) => {
    return commentEntityAdapter.addOne(comment!, {...state})
  })
);
