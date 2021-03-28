import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TraindescrComponent} from './traindescr.component';

const routes: Routes = [
  {path: 'traindescr', component: TraindescrComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraindescrRoutingModule { }
