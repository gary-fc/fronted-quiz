import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Authorization} from '../models/user/Authorization';
import {Credentials} from '../models/user/Credentials';
import {UserGateway} from '../models/user/gateway/user-gateway';
import {User} from '../models/user/User';
import {UserRegisterResponse} from '../models/user/UserRegisterResponse';

@Injectable({providedIn: 'root'})
export class GetUserUseCase {
  constructor(private _userGateway: UserGateway) {
  }

  public login(credentials: Credentials): Observable<HttpResponse<Authorization>> {
    return this._userGateway.login(credentials);
  }

  public registerUser(user: User): Observable<HttpResponse<UserRegisterResponse>> {
    return this._userGateway.registerUser(user);
  }
}
