import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ImageGateway} from '../../../domain/models/images/gateway/image-gateway';
import {Image} from '../../../domain/models/images/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageHttpService extends ImageGateway {

  constructor(private _http: HttpClient) {
    super();
  }

  getRandomImage(): Observable<HttpResponse<Image[]>> {
    return this._http.get<Image[]>(`https://api.thecatapi.com/v1/images/search`, {observe: 'response'})
  }
}
