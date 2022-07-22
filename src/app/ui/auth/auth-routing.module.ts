import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainerComponent} from './pages/login-container/login-container.component';
import {RegisterContainerComponent} from './pages/register-container/register-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginContainerComponent,
  },
  {
    path: 'register',
    component: RegisterContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
