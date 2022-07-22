import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Credentials} from '../../../../domain/models/user/Credentials';
import {User} from '../../../../domain/models/user/User';
import {GetUserUseCase} from '../../../../domain/usecase/get-user-usecase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public registerFormGroup ?: FormGroup;
  public isCorrect ?: boolean;

  constructor(private _formBuilder: FormBuilder,
              private _getUserUseCase: GetUserUseCase,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._initialize()
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public register(): void {
    let user: User = this._getUser();
    this._getUserUseCase.registerUser(user).subscribe((resp) => {
      if (resp.status == 200) {
        this.isCorrect = true;
        this._redirectToLogin()
      } else {
        this.isCorrect = false
      }
    })
  }

  private _getUser(): User {
    return {
      accountId: this.registerFormGroup?.get('accountId')?.value,
      firstName: this.registerFormGroup?.get('firstName')?.value,
      lastName: this.registerFormGroup?.get('lastName')?.value,
      username: this.registerFormGroup?.get('username')?.value,
      email: this.registerFormGroup?.get('email')?.value,
      password: this.registerFormGroup?.get('password')?.value
    }
  }

  private _redirectToLogin(): void {
    this._router.navigateByUrl('/auth/login')
  }

  private _initialize() {
    this.registerFormGroup = this._formBuilder.group({
      accountId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  private _finalize() {
  }

}
