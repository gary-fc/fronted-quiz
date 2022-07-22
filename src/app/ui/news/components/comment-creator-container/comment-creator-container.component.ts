import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {Comment} from '../../../../domain/models/comment/Comment';
import {CommentResponse} from '../../../../domain/models/comment/CommentResponse';
import {User} from '../../../../domain/models/user/User';
import {GetCommentUseCase} from '../../../../domain/usecase/get-comment-usecase';
import {createComment, loadComments} from '../../../../infraestructure/store/actions/comment.action';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {selectComments} from '../../../../infraestructure/store/selectors/comment.selectors';

@Component({
  selector: 'app-comment-creator',
  templateUrl: './comment-creator-container.component.html',
  styleUrls: ['./comment-creator-container.component.sass']
})
export class CommentCreatorContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  public content?: string;
  @Input() bulletin?: Bulletin;

  private user?: User;


  constructor(private _store: Store<AppStates>,
              private _getCommentUseCase: GetCommentUseCase,
              private _cookieService: CookieService) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public createComment(): void {
    let comment: Comment = {
      content: this.content,
      accountId: this.user?.accountId,
      commentId: 0,
      senderUserId: 0
    };

    this._store.dispatch(createComment({bulletinId: this.bulletin?.id!, comment: comment}))
  }

  private _getUser(): void {
    let user: string = this._cookieService.get('user');
    if (user) {
      this.user = JSON.parse(user)
    }
  }

  private _initialize(): void {
    this._getUser();
  }

  private _finalize(): void {
  }

}
