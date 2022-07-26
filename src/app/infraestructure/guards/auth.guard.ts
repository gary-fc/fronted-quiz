import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private _cookieService: CookieService, private _router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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
