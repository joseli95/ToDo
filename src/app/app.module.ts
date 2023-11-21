import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx'
import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component'

@NgModule({
  declarations: [AppComponent, SystemLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, Ui5WebcomponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
