import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ui5WebcomponentsModule} from "@ui5/webcomponents-ngx";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ui5WebcomponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
