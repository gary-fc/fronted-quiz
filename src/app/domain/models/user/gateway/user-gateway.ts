import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Authorization} from '../Authorization';
import {Credentials} from '../Credentials';

export abstract class UserGateway{
  public abstract login(credentials: Credentials):Observable<HttpResponse<Authorization>>
}
