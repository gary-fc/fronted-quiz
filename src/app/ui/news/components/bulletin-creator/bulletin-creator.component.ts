import {Component, OnInit} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {SwitchService} from '../../../../infraestructure/driven-adapter/switch/switch.service';
import {createBulletin} from '../../../../infraestructure/store/actions/bulletin.actions';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-bulletin-creator',
  templateUrl: './bulletin-creator.component.html',
  styleUrls: ['./bulletin-creator.component.sass']
})
export class BulletinCreatorComponent implements OnInit {
  public showModal: boolean = false;

  constructor(private modalSwitchService: SwitchService, private _cookieService: CookieService, private _store: Store<AppStates>) {
  }

  ngOnInit(): void {
    this._finalize();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public createBulletin(): void {

    let token = this._getToken()
    if (token) {
      let decoded = BulletinCreatorComponent._decodeToken(token)
      let bulletin: Bulletin = {
        accountId: decoded.accountId,
        senderUserId: 0,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      };
      this._store.dispatch(createBulletin({bulletin: bulletin}))
    }
  }

  public openModal(): void {
    this.showModal = true;
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
    this.modalSwitchService.$modal.subscribe((show) => {
      this.showModal = show;
    })
  }

}
