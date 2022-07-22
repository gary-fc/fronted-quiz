import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {HeaderMenuComponent} from './components/header-menu/header-menu.component';
import {ModalComponent} from './components/modal/modal.component';


let modules: any = [HttpClientModule];

let material: any = [FormsModule, ReactiveFormsModule, MatIconModule];

let components: any = [HeaderMenuComponent, ModalComponent];


@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule, modules, material
  ],
  exports: [
    modules, material, components
  ]
})
export class SharedModule {
}
