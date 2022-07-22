import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../Image';

export abstract class ImageGateway {
  public abstract getRandomImage(): Observable<HttpResponse<Image[]>>;
}
