import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {GetBulletinUseCase} from '../../domain/usecase/get-bulletin-usecase';
import {GetCommentUseCase} from '../../domain/usecase/get-comment-usecase';
import {GetImageUseCase} from '../../domain/usecase/get-image-usecase';
import {BulletinEffects} from '../../infraestructure/store/effects/bulletin.effects';
import {CommentEffects} from '../../infraestructure/store/effects/comment.effects';
import {SharedModule} from '../shared/shared.module';
import {BulletinCreatorContainerComponent} from './components/bulletin-creator-container/bulletin-creator-container.component';
import {CommentCreatorContainerComponent} from './components/comment-creator-container/comment-creator-container.component';
import {CommentViewComponent} from './components/comment-view/comment-view.component';
import {NewsViewComponent} from './components/news-view/news-view.component';

import {NewsRoutingModule} from './news-routing.module';
import {IndexNewsContainerComponent} from './pages/index-news-container/index-news-container.component';


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
    EffectsModule.forFeature([BulletinEffects, CommentEffects]),
  ],
  providers: [
    GetBulletinUseCase, GetCommentUseCase, GetImageUseCase
  ]
})
export class NewsModule {
}
