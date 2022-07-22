import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Comment} from '../../../domain/models/comment/Comment';
import {CommentResponse} from '../../../domain/models/comment/CommentResponse';
import {CommentGateway} from '../../../domain/models/comment/gateway/comment-gateway';

@Injectable({
  providedIn: 'root'
})
export class CommentHttpService extends CommentGateway {

  constructor(private _http: HttpClient) {
    super();
  }

  createComment(bulletinId: number, comment: Comment): Observable<HttpResponse<CommentResponse>> {
    return this._http.post(`${environment.base_url_bulletin}/api/bulletins/${bulletinId}/comments/`, comment, {observe: 'response'})
  }

  getListComments(bulletinId: number): Observable<HttpResponse<CommentResponse[]>> {
    return this._http.get<CommentResponse[]>(`${environment.base_url_bulletin}/api/searches/comments/${bulletinId}`, {observe: 'response'})
  }
}
