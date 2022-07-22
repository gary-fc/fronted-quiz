import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../Comment';
import {CommentResponse} from '../CommentResponse';

export abstract class CommentGateway {
  public abstract createComment(bulletinId: number, comment: Comment): Observable<HttpResponse<CommentResponse>>

  public abstract getListComments(bulletinId: number): Observable<HttpResponse<CommentResponse[]>>
}
