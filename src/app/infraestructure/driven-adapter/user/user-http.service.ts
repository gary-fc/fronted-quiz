import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Authorization} from '../../../domain/models/user/Authorization';
import {Credentials} from '../../../domain/models/user/Credentials';
import {UserGateway} from '../../../domain/models/user/gateway/user-gateway';

@Injectable()
export class UserHttpService extends UserGateway {

  constructor(private _http: HttpClient) {
    super();
  }

  login(credentials: Credentials): Observable<HttpResponse<Authorization>> {
    return this._http.post(`${environment.base_url}/api/auth/login`, credentials, {observe: 'response'});
  }
}
