import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


let modules : any = [HttpClientModule];

let material: any = [FormsModule,ReactiveFormsModule];

let components: any = [];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,modules,material, components
  ],
  exports: [
    modules, material, components
  ]
})
export class SharedModule { }
