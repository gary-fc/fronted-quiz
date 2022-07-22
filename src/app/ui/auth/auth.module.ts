import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ROOT_REDUCERS} from '../../infraestructure/store/app.states';
import {UserEffects} from '../../infraestructure/store/effects/user.effects';
import {SharedModule} from '../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegisterContainerComponent } from './pages/register-container/register-container.component';


@NgModule({
  declarations: [
    LoginContainerComponent,
    RegisterContainerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,

  ],
})
export class AuthModule { }
