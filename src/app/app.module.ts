import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegformComponent } from './regform/regform.component';
import { TraindescrComponent } from './traindescr/traindescr.component';
import {HomepageModule} from './homepage/homepage.module';
import {RegformModule} from './regform/regform.module';
import {TraindescrModule} from './traindescr/traindescr.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegformComponent,
    TraindescrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    RegformModule,
    TraindescrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
