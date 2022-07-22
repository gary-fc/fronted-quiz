import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BulletinGateway} from '../../domain/models/bulletin/gateway/bulletin-gateway';
import {UserGateway} from '../../domain/models/user/gateway/user-gateway';
import {BulletinHttpService} from '../../infraestructure/driven-adapter/bulletin/bulletin-http.service';
import {UserHttpService} from '../../infraestructure/driven-adapter/user/user-http.service';
import {ROOT_REDUCERS} from '../../infraestructure/store/app.states';
import {BulletinEffects} from '../../infraestructure/store/effects/bulletin.effects';
import {CommentEffects} from '../../infraestructure/store/effects/comment.effects';
import {UserEffects} from '../../infraestructure/store/effects/user.effects';
import {SharedModule} from '../shared/shared.module';

import {NewsRoutingModule} from './news-routing.module';
import {IndexNewsContainerComponent} from './pages/index-news-container/index-news-container.component';
import {NewsViewComponent} from './components/news-view/news-view.component';
import {BulletinCreatorContainerComponent} from './components/bulletin-creator-container/bulletin-creator-container.component';
import {CommentCreatorContainerComponent} from './components/comment-creator-container/comment-creator-container.component';
import {CommentViewComponent} from './components/comment-view/comment-view.component';


@NgModule({
  declarations: [
    IndexNewsContainerComponent,
    NewsViewComponent,
    BulletinCreatorContainerComponent,
    CommentCreatorContainerComponent,
    CommentViewComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    EffectsModule.forFeature([BulletinEffects]),
    EffectsModule.forFeature([CommentEffects]),
  ],
})
export class NewsModule {
}
