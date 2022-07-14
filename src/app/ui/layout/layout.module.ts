import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderMenuComponent} from '../shared/components/header-menu/header-menu.component';
import {SharedModule} from '../shared/shared.module';
import {UserLayoutComponent} from './user-layout/user-layout.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
})
export class LayoutModule {
}
