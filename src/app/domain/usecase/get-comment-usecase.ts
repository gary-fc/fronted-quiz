import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models/comment/Comment';
import {CommentResponse} from '../models/comment/CommentResponse';
import {CommentGateway} from '../models/comment/gateway/comment-gateway';

@Injectable()
export class GetCommentUseCase {
  constructor(private _commentGateway: CommentGateway) {
  }

  public createComment(bulletinId: number, comment: Comment): Observable<HttpResponse<CommentResponse>> {
    return this._commentGateway.createComment(bulletinId, comment);
  }

  public getListComments(bulletinId: number): Observable<HttpResponse<CommentResponse[]>> {
    return this._commentGateway.getListComments(bulletinId);
  }
}
