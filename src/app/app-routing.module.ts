import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './infraestructure/guards/auth.guard';

const routes: Routes = [
  {
    path: 'news',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./ui/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./ui/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
