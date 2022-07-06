import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserGateway} from './domain/models/user/gateway/user-gateway';
import {UserHttpService} from './infraestructure/driven-adapter/user/user-http.service';
import {UserLayoutComponent} from './ui/layout/user-layout/user-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
    NgbModule,
    SharedModule
  ],
  exports: [AppRoutingModule],
  providers: [{provide: UserGateway, useClass: UserHttpService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
