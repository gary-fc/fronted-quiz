import {createSelector} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {CommentResponse} from '../../../domain/models/comment/CommentResponse';
import {commentEntityAdapter} from '../adapters/comment.adapter';
import {AppStates} from '../app.states';

export const selectLoadCommentFeature = (state: AppStates) => state.comment;

const commentSelectors = commentEntityAdapter.getSelectors();

export const selectComments = createSelector(
  selectLoadCommentFeature,
  commentSelectors.selectAll
);


export const selectCommentsByBulletin = (bulletinId: number) => createSelector(
  selectComments,
  (comments: CommentResponse[]): CommentResponse[] => {
    const commentsByBulletin: CommentResponse[] = comments.filter((comment: CommentResponse) => {
      if (comment.bulletinId === bulletinId) {
        return comment
      }
      return undefined;
    });

    if (comments) {
      return commentsByBulletin
    }
    return [];
  }
);
