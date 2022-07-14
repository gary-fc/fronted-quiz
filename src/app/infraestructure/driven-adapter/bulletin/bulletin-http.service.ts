import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Bulletin} from '../../../domain/models/bulletin/Bulletin';
import {BulletinGateway} from '../../../domain/models/bulletin/gateway/bulletin-gateway';
import {Authorization} from '../../../domain/models/user/Authorization';

@Injectable()
export class BulletinHttpService extends BulletinGateway {
  constructor(private _http: HttpClient) {
    super();
  }

  public createBulletin(bulletin: Bulletin): Observable<HttpResponse<Bulletin>> {
    return this._http.post<Bulletin>(`${environment.base_url_bulletin}/api/bulletins/createBulletin`, bulletin, {observe: 'response'});
  }

  public getListBulletins(pageNo: number, pageSize: number): Observable<HttpResponse<Array<Bulletin>>> {
    return this._http.get<Array<Bulletin>>(`${environment.base_url_bulletin}/api/bulletins/paginated?pageNo=${pageNo}&pageSize=${pageSize}`, {
      observe: 'response'
    });
  }


}
