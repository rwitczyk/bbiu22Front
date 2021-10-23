import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CarsListComponent} from "./components/cars-list/cars-list.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
