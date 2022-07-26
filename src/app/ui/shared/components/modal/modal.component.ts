import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {SwitchService} from '../../../../infraestructure/driven-adapter/switch/switch.service';
import {createBulletin} from '../../../../infraestructure/store/actions/bulletin.actions';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {Store} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private switchModalService: SwitchService, private _store: Store<AppStates>, private _cookieService: CookieService) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public closeModal(): void {
    this.switchModalService.$modal.emit(false)
  }

  public createBulletin() {
    let token = this._getToken()
    if (token) {
      let decoded = ModalComponent._decodeToken(token)
      let bulletin: Bulletin = {
        accountId: decoded.accountId,
        senderUserId: 0,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      };
      this._store.dispatch(createBulletin({bulletin: bulletin}))
      this.closeModal()
    }
  }

  private static _decodeToken(token: string): any {
    return jwt_decode(token);
  }

  private _getToken(): string | null {
    let jwt: string = this._cookieService.get('jwt');
    if (jwt.length > 0) {
      return jwt;
    }
    return null;
  }

  private _initialize(): void {

  }

  private _finalize(): void {

  }

}
