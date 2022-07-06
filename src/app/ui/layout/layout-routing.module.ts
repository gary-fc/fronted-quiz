import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexNewsComponent} from '../news/pages/index-news/index-news.component';
import {UserLayoutComponent} from './user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [{ path: '', component: IndexNewsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
