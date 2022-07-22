import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {GetBulletinUseCase} from '../../../domain/usecase/get-bulletin-usecase';
import {createBulletin, createBulletinSuccess, loadBulletins, loadBulletinsSuccess} from '../actions/bulletin.actions';

@Injectable()
export class BulletinEffects {
  constructor(private actions$: Actions, private _getBulletinUseCase: GetBulletinUseCase) {
  }


  loadBulletins$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBulletins),
      mergeMap((action) => {
        return this._getBulletinUseCase.getListBulletins(action.pageNo, action.pageSize).pipe(map((resp) => loadBulletinsSuccess({bulletins: resp.body})));
      }))
  })


  createBulletin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createBulletin),
        mergeMap((action) => {
          return this._getBulletinUseCase.createBulletin(action.bulletin).pipe(map((resp) => createBulletinSuccess({bulletin: resp.body!})))
        })
      )
    }
  )


}
