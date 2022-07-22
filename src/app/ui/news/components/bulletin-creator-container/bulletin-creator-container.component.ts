import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import jwt_decode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {User} from '../../../../domain/models/user/User';
import {GetImageUseCase} from '../../../../domain/usecase/get-image-usecase';
import {SwitchService} from '../../../../infraestructure/driven-adapter/switch/switch.service';
import {createBulletin} from '../../../../infraestructure/store/actions/bulletin.actions';
import {AppStates} from '../../../../infraestructure/store/app.states';

@Component({
  selector: 'app-bulletin-creator',
  templateUrl: './bulletin-creator-container.component.html',
  styleUrls: ['./bulletin-creator-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletinCreatorContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  public showModal: boolean = false;
  public randomImageUrl?: string = '';
  public showImage: boolean = false;
  public body: string = '';
  public user?: User;

  constructor(private modalSwitchService: SwitchService,
              private _cookieService: CookieService,
              private _store: Store<AppStates>,
              private _getImageUseCase: GetImageUseCase,
              private _cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public createBulletin(): void {
    let token = this._getToken()
    if (token) {
      let decoded = BulletinCreatorContainerComponent._decodeToken(token);
      let bulletin: Bulletin = {
        accountId: decoded.accountId,
        senderUserId: 0,
        body: this.body,
        fileUrl: this.randomImageUrl
      };
      this._store.dispatch(createBulletin({bulletin: bulletin}))
      this.resetInputs()
    }
  }

  public openModal(): void {
    this.showModal = true;
  }

  public getRandomImage(): void {
    this._getImageUseCase.getRandomImage().subscribe((resp) => {
      if (resp.body != null) {
        this.showImage = true;
        this.randomImageUrl = resp.body[0].url;
        this._cdRef.markForCheck()
      }
    });
  }

  private resetInputs(): void {
    this.randomImageUrl = '';
    this.body = '';
    this.showImage = false;
  }

  private _getUser(): void {
    let user: string = this._cookieService.get('user');
    if (user) {
      this.user = JSON.parse(user)
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
    this.modalSwitchService.$modal.subscribe((show) => {
      this.showModal = show;
    });
    this._getUser();
  }

  private _finalize(): void {

  }

}
