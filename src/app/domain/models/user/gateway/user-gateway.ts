import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Authorization} from '../Authorization';
import {Credentials} from '../Credentials';
import {User} from '../User';
import {UserRegisterResponse} from '../UserRegisterResponse';

export abstract class UserGateway {
  public abstract login(credentials: Credentials): Observable<HttpResponse<Authorization>>

  public abstract registerUser(user: User): Observable<HttpResponse<UserRegisterResponse>>

  public abstract getUserByAccountId(accountId: number): Observable<HttpResponse<User>>
}
