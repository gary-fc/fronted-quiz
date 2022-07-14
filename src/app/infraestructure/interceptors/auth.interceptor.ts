import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _cookieService: CookieService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this._requestClone(request, next);
  }

  private _requestClone(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('skip')) {
      return next.handle(request);
    }
    let headers = this._addTokenHeader(request);
    const requestClone = request.clone({headers})
    return next.handle(requestClone);
  }

  private _addTokenHeader(request: HttpRequest<unknown>): HttpHeaders {
    const token = this._cookieService.get('jwt')
    return request.headers.append('Authorization', `Bearer ${token}`)
  }
}
