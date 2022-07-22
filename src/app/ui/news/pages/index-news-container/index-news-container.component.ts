import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {loadBulletins} from '../../../../infraestructure/store/actions/bulletin.actions';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {selectLoadBulettins} from '../../../../infraestructure/store/selectors/bulletin.selectors';

@Component({
  selector: 'app-index-news',
  templateUrl: './index-news.component.html',
  styleUrls: ['./index-news.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexNewsComponent implements OnInit, AfterViewInit {
  public bulletins?: Observable<Bulletin[]>;

  constructor(private _store: Store<AppStates>) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public getListBulletins(): void {
    this._store.dispatch(loadBulletins({pageNo: 0, pageSize: 5}))
  }

  private _listenLoadBulletins(): void {
    this.bulletins = this._store.select(selectLoadBulettins) as Observable<Bulletin[]>;
  }

  private _initialize(): void {
    this.getListBulletins();

    this._listenLoadBulletins()

  }

  private _finalize(): void {
  }


}
