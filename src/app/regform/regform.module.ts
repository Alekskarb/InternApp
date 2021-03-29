import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RegformComponent} from './regform.component';
import {RegformRoutingModule} from './regform-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCommonModule} from '@angular/material/core';

@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    BrowserModule,
    RegformRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [RegformComponent],
  exports: [
    RegformComponent
  ]
})
export class RegformModule { }
