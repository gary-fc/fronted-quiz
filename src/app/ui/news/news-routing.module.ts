import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLayoutComponent} from '../layout/user-layout/user-layout.component';
import {IndexNewsContainerComponent} from './pages/index-news-container/index-news-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [{path: '', component: IndexNewsContainerComponent}],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}
