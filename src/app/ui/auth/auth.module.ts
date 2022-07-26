import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {GetUserUseCase} from '../../domain/usecase/get-user-usecase';
import {UserEffects} from '../../infraestructure/store/effects/user.effects';
import {SharedModule} from '../shared/shared.module';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginContainerComponent} from './pages/login-container/login-container.component';
import {RegisterContainerComponent} from './pages/register-container/register-container.component';


@NgModule({
  declarations: [
    LoginContainerComponent,
    RegisterContainerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    GetUserUseCase
  ]
})
export class AuthModule {
}
