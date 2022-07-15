import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import {Subscription} from 'rxjs';
import {Authorization} from '../../../../domain/models/user/Authorization';
import {Credentials} from '../../../../domain/models/user/Credentials';
import {GetUserUseCase} from '../../../../domain/usecase/get-user-usecase';
import {userLogin} from '../../../../infraestructure/store/actions/user.actions';
import {AppStates} from '../../../../infraestructure/store/app.states';
import {selectLoadUser} from '../../../../infraestructure/store/selectors/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginFormGroup ?: FormGroup;
  private _selectLoadUser?: Subscription;

  constructor(private _formBuilder: FormBuilder,
              private _getUserUseCase: GetUserUseCase,
              private _cookieService: CookieService,
              private _router: Router,
              private _store: Store<AppStates>) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public login(): void {
    let credentials: Credentials = this._getCredentials();
    this._store.dispatch(userLogin({credentials: credentials}))
  }

  private _listenLoadUser(): void {
    this._selectLoadUser = this._store.select(selectLoadUser).subscribe((resp) => {
      if (resp != null) {
        this._redirectToNews();
      }
    });
  }

  _redirectToNews() {
    this._router.navigateByUrl('/news')
  }

  _saveCookie(authorization: Authorization) {
    this._cookieService.set('jwt', authorization.token!, new Date().getDate(), '/')
  }

  private _getCredentials(): Credentials {
    return {email: this.loginFormGroup?.get('email')?.value, password: this.loginFormGroup?.get('password')?.value}
  }

  _createLoginFormGroup(): void {
    this.loginFormGroup = this._formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  private _initialize() {
    this._listenLoadUser();
    this._createLoginFormGroup();


  }

  private _finalize() {
    this._selectLoadUser?.unsubscribe();
  }


}
