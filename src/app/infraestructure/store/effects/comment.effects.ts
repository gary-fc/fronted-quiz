import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {GetCommentUseCase} from '../../../domain/usecase/get-comment-usecase';
import {createBulletin, createBulletinSuccess} from '../actions/bulletin.actions';
import {createComment, createCommentSuccess, loadComments, loadCommentsSuccess} from '../actions/comment.action';

@Injectable()
export class CommentEffects {
  constructor(private actions$: Actions, private _getCommentUseCase: GetCommentUseCase) {
  }

  loadComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadComments),
      mergeMap((action) => {
        return this._getCommentUseCase.getListComments(action.bulletinId).pipe(map((resp) => loadCommentsSuccess({comments: resp.body})));
      }))
  })

  createComment$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createComment),
        mergeMap((action) => {
          return this._getCommentUseCase.createComment(action.bulletinId, action.comment).pipe(map((resp) => createCommentSuccess({comment: resp.body!})))
        })
      )
    }
  )

}
