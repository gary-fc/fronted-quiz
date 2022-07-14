import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bulletin} from '../Bulletin';

export abstract class BulletinGateway {
  public abstract createBulletin(bulletin: Bulletin): Observable<HttpResponse<Bulletin>>;

  public abstract getListBulletins(pageNo: number, pageSize: number): Observable<HttpResponse<Array<Bulletin>>>;
}
