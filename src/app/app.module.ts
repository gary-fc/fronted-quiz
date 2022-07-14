import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BulletinGateway} from './domain/models/bulletin/gateway/bulletin-gateway';
import {UserGateway} from './domain/models/user/gateway/user-gateway';
import {BulletinHttpService} from './infraestructure/driven-adapter/bulletin/bulletin-http.service';
import {UserHttpService} from './infraestructure/driven-adapter/user/user-http.service';
import {AuthInterceptor} from './infraestructure/interceptors/auth.interceptor';
import {UserEffects} from './infraestructure/store/effects/user.effects';
import {_userReducer} from './infraestructure/store/reducers/user.reducers';
import {UserLayoutComponent} from './ui/layout/user-layout/user-layout.component';
import {SharedModule} from './ui/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({
      user: _userReducer
    }),
    EffectsModule.forFeature([UserEffects]),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  exports: [AppRoutingModule],
  providers: [{provide: UserGateway, useClass: UserHttpService}, {
    provide: BulletinGateway,
    useClass: BulletinHttpService
  }, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
