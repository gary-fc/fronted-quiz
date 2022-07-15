import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Bulletin} from '../models/bulletin/Bulletin';
import {BulletinGateway} from '../models/bulletin/gateway/bulletin-gateway';

@Injectable({providedIn: 'root'})
export class GetBulletinUseCase {
  constructor(private _bulletinGateway: BulletinGateway) {
  }

  public createBulletin(bulletin: Bulletin): Observable<HttpResponse<Bulletin>> {
    return this._bulletinGateway.createBulletin(bulletin);
  }

  public getListBulletins(pageNo: number, pageSize: number): Observable<HttpResponse<Bulletin[]>> {
    return this._bulletinGateway.getListBulletins(pageNo, pageSize);
  }
}
