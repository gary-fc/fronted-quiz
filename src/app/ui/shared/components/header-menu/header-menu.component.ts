import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private _cookieService: CookieService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this._cookieService.deleteAll();
    this._router.navigateByUrl('/auth/login')
  }

}
