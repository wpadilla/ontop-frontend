import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarOptionComponent } from './navbar/components/navbar-option/navbar-option.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
