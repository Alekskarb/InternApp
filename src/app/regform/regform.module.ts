import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RegformComponent} from './regform.component';
import {RegformRoutingModule} from './regform-routing.module';

@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    BrowserModule,
    RegformRoutingModule
  ],
  providers: [],
  bootstrap: [RegformComponent],
  exports: [
    RegformComponent
  ]
})
export class RegformModule { }
