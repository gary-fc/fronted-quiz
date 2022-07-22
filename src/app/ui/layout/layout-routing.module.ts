import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexNewsContainerComponent} from '../news/pages/index-news-container/index-news-container.component';
import {UserLayoutComponent} from './user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [{ path: '', component: IndexNewsContainerComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
