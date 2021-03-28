import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {RegformComponent} from './regform/regform.component';
import {TraindescrComponent} from './traindescr/traindescr.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  // {path: 'regform', component: RegformComponent},
  // {path: 'traindescr', component: TraindescrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
