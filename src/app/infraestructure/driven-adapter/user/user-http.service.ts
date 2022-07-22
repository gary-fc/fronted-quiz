import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Authorization} from '../../../domain/models/user/Authorization';
import {Credentials} from '../../../domain/models/user/Credentials';
import {UserGateway} from '../../../domain/models/user/gateway/user-gateway';
import {User} from '../../../domain/models/user/User';
import {UserRegisterResponse} from '../../../domain/models/user/UserRegisterResponse';

@Injectable()
export class UserHttpService extends UserGateway {


  constructor(private _http: HttpClient) {
    super();
  }

  public login(credentials: Credentials): Observable<HttpResponse<Authorization>> {
    return this._http.post<Authorization>(`${environment.base_url_auth}/api/auth/login`, credentials, {
      observe: 'response',
      headers: {skip: 'true'}
    });
  }

  public registerUser(user: User): Observable<HttpResponse<UserRegisterResponse>> {
    return this._http.post<UserRegisterResponse>(`${environment.base_url_auth}/api/auth/register`, user, {
      observe: 'response',
      headers: {skip: 'true'}
    });
  }

  public getUserByAccountId(accountId: number): Observable<HttpResponse<User>> {
    return this._http.get(`${environment.base_url_auth}/api/users/byAccountId/${accountId}`,
      {observe: 'response', headers: {skip: 'true'}})
  }
}
