import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BulletinGateway} from '../../domain/models/bulletin/gateway/bulletin-gateway';
import {UserGateway} from '../../domain/models/user/gateway/user-gateway';
import {BulletinHttpService} from '../../infraestructure/driven-adapter/bulletin/bulletin-http.service';
import {UserHttpService} from '../../infraestructure/driven-adapter/user/user-http.service';
import {SharedModule} from '../shared/shared.module';

import {NewsRoutingModule} from './news-routing.module';
import {IndexNewsComponent} from './pages/index-news/index-news.component';
import {NewsComponent} from './components/news/news.component';
import {BulletinCreatorComponent} from './components/bulletin-creator/bulletin-creator.component';


@NgModule({
  declarations: [
    IndexNewsComponent,
    NewsComponent,
    BulletinCreatorComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
})
export class NewsModule {
}
