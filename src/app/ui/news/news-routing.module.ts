import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLayoutComponent} from '../layout/user-layout/user-layout.component';
import {IndexNewsComponent} from './pages/index-news/index-news.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [{path: '', component: IndexNewsComponent}],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}
