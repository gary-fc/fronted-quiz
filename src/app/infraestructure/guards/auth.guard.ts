import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {Authorization} from '../../domain/models/user/Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private _cookieService: CookieService, private _router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.isLogged();
  }

  private isLogged(): boolean {
    try {
      let jwt: string = this._cookieService.get('jwt');
      if (jwt.length > 0) {

        return true
      }
      this._router.navigateByUrl('/auth/login');
      return false;
    } catch (e) {
      return false
    }
  }

}
