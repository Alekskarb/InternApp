import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TraindescrComponent} from './traindescr.component';
import {TraindescrRoutingModule} from './traindescr-routing.module';

@NgModule({
  declarations: [
    TraindescrComponent
  ],
  imports: [
    BrowserModule,
    TraindescrRoutingModule
  ],
  providers: [],
  bootstrap: [TraindescrComponent],
  exports: [
    TraindescrComponent
  ]
})
export class TraindescrModule { }
