import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {CommentResponse} from '../../../../domain/models/comment/CommentResponse';
import {User} from '../../../../domain/models/user/User';
import {GetUserUseCase} from '../../../../domain/usecase/get-user-usecase';
import {loadComments} from '../../../../infraestructure/store/actions/comment.action';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {selectCommentsByBulletin} from '../../../../infraestructure/store/selectors/comment.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsViewComponent implements OnInit, AfterViewInit, OnDestroy {
  public isLoadComments: boolean = false;
  public comments?: Observable<CommentResponse[]>;
  public user?: User;
  @Input() bulletin?: Bulletin;

  constructor(private _getUserUseCase: GetUserUseCase,
              private _cdRef: ChangeDetectorRef,
              private _store: Store<AppStates>) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public showComments(): void {
    this.isLoadComments = true;
  }

  public loadComments() {
    this._store.dispatch(loadComments({bulletinId: this.bulletin?.bulletinId!}))
  }

  private _listenLoadComments(): void {
    this.comments = this._store.select(selectCommentsByBulletin(this.bulletin?.bulletinId!));
  }

  private _initialize(): void {
    this._listenLoadComments();
    this.loadComments();
  }

  private _finalize(): void {
  }
}
