import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ImageGateway} from '../models/images/gateway/image-gateway';
import {Image} from '../models/images/Image';

@Injectable()
export class GetImageUseCase {


  constructor(private _imageGateway: ImageGateway) {
  }

  public getRandomImage(): Observable<HttpResponse<Image[]>> {
    return this._imageGateway.getRandomImage();
  }
}
