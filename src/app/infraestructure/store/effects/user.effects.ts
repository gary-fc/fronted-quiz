import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import jwtDecode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Authorization} from '../../../domain/models/user/Authorization';
import {User} from '../../../domain/models/user/User';
import {GetUserUseCase} from '../../../domain/usecase/get-user-usecase';
import {loadUser, userLogin, userLoginSuccess} from '../actions/user.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private _getUserUseCase: GetUserUseCase, private _cookieService: CookieService) {
  }

  userLogin$ = createEffect(() => {
    return this.actions$.pipe(ofType(userLogin), mergeMap((action) => {
      return this._getUserUseCase.login({email: action.credentials.email, password: action.credentials.password}).pipe(map((resp) => {
        let auth: Authorization = {
          token: resp.body?.token
        };
        this._cookieService.set('jwt', JSON.stringify(auth), new Date().getDate() + 7, '/');
        return userLoginSuccess({auth: auth})
      }))
    }))
  });

  userLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(ofType(userLoginSuccess), map((action) => {
      let user: User = jwtDecode(action.auth.token!);
      return loadUser({user: user})
    }))
  });

  loadUser$ = createEffect(
    () => {
      return this.actions$.pipe(ofType(loadUser), tap((action) => {
        this._cookieService.set('user', JSON.stringify(action.user), new Date().getDate() + 7, '/');
      }))
    },
    {dispatch: false}
  );
}
