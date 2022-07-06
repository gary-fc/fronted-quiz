import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { IndexNewsComponent } from './pages/index-news/index-news.component';


@NgModule({
  declarations: [
    IndexNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
