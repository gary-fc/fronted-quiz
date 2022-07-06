import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Authorization} from '../models/user/Authorization';
import {Credentials} from '../models/user/Credentials';
import {UserGateway} from '../models/user/gateway/user-gateway';

@Injectable({providedIn:'root'})
export class GetUserUsecase{
  constructor(private _userGateway: UserGateway){}

  public login(credentials:Credentials):Observable<HttpResponse<Authorization>>{
    return this._userGateway.login(credentials)
  }
}
