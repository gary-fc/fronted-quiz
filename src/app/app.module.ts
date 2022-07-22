import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BulletinGateway} from './domain/models/bulletin/gateway/bulletin-gateway';
import {CommentGateway} from './domain/models/comment/gateway/comment-gateway';
import {ImageGateway} from './domain/models/images/gateway/image-gateway';
import {UserGateway} from './domain/models/user/gateway/user-gateway';
import {BulletinHttpService} from './infraestructure/driven-adapter/bulletin/bulletin-http.service';
import {CommentHttpService} from './infraestructure/driven-adapter/comment/comment-http.service';
import {ImageHttpService} from './infraestructure/driven-adapter/image/image-http.service';
import {UserHttpService} from './infraestructure/driven-adapter/user/user-http.service';
import {AuthInterceptor} from './infraestructure/interceptors/auth.interceptor';
import {ROOT_REDUCERS} from './infraestructure/store/app.states';
import {BulletinEffects} from './infraestructure/store/effects/bulletin.effects';
import {CommentEffects} from './infraestructure/store/effects/comment.effects';
import {UserEffects} from './infraestructure/store/effects/user.effects';
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
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),

    EffectsModule.forFeature([UserEffects]),


  ],
  exports: [AppRoutingModule],
  providers: [
    {provide: UserGateway, useClass: UserHttpService},
    {provide: BulletinGateway, useClass: BulletinHttpService},
    {provide: ImageGateway, useClass: ImageHttpService},
    {provide: CommentGateway, useClass: CommentHttpService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
