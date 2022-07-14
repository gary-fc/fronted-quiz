import {Component, OnInit} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {GetBulletinUseCase} from '../../../../domain/usecase/get-bulletin-usecase';
import {SwitchService} from '../../../../infraestructure/driven-adapter/switch/switch.service';

@Component({
  selector: 'app-bulletin-creator',
  templateUrl: './bulletin-creator.component.html',
  styleUrls: ['./bulletin-creator.component.sass']
})
export class BulletinCreatorComponent implements OnInit {
  public showModal: boolean = false;

  constructor(private modalSwitchService: SwitchService, private _cookieService: CookieService, private _getBulletinUseCase: GetBulletinUseCase) {
  }

  ngOnInit(): void {
    this._finalize();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public openModal(): void {
    this.showModal = true;
  }

  private _decodeToken(token: string): any {
    return jwt_decode(token);
  }

  private _getToken(): string | null {
    let jwt: string = this._cookieService.get('jwt');
    if (jwt.length > 0) {
      return jwt;
    }
    return null;
  }

  public createBulletin(): void {

    let token = this._getToken()
    if (token) {
      let decoded = this._decodeToken(token)
      let bulletin: Bulletin = {
        accountId: decoded.accountId,
        senderUserId: 0,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      };
      this._getBulletinUseCase.createBulletin(bulletin).subscribe((resp) => {
        console.log(resp)
      })
    }
  }

  private _initialize(): void {

  }

  private _finalize(): void {
    this.modalSwitchService.$modal.subscribe((show) => {
      this.showModal = show;
    })
  }

}
