import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {loadBulletins} from '../../../../infraestructure/store/actions/bulletin.actions';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {selectBulletins} from '../../../../infraestructure/store/selectors/bulletin.selectors';

@Component({
  selector: 'app-index-news',
  templateUrl: './index-news-container.component.html',
  styleUrls: ['./index-news-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexNewsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
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
    this.bulletins = this._store.select(selectBulletins);
  }

  private _initialize(): void {
    this.getListBulletins();
    this._listenLoadBulletins()
  }

  private _finalize(): void {
  }


}
