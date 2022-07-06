import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Authorization} from '../../../../domain/models/user/Authorization';
import {Credentials} from '../../../../domain/models/user/Credentials';
import {GetUserUsecase} from '../../../../domain/usecase/get-user-usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginFormGroup ?: FormGroup;
  public isCorrect ?: boolean;

  constructor(private _formBuilder: FormBuilder, private _getUserUsecase: GetUserUsecase, private _cookieService: CookieService, private _router: Router) {
    this.loginFormGroup = _formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public login() {
    let credentials: Credentials = this._getCredentials();
    this._getUserUsecase.login(credentials).subscribe((resp) => {
      if (resp.status == 200) {
        this.isCorrect = true;
        this._saveCookie(resp.body!)
        this._redirectToNews()
      } else {
        this.isCorrect = false
      }
    })
  }

  _redirectToNews(){
    this._router.navigateByUrl('news')
  }
  _saveCookie(authorization: Authorization) {
    this._cookieService.set('jwt', authorization.token!)
  }

  private _getCredentials(): Credentials {
    return {email: this.loginFormGroup?.get('email')?.value, password: this.loginFormGroup?.get('password')?.value}
  }

  private _initialize() {

  }

  private _finalize() {

  }


}
