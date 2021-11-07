import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarsListComponent} from './components/cars-list/cars-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {AddNewCarComponent} from './components/add-new-car/add-new-car.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {OtherComponent} from './components/other/other.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import {TicTacToeComponent} from './components/game/tic-tac-toe/tic-tac-toe.component';
import {BoardComponent} from './components/game/board/board.component';
import {BoardSquareComponent} from './components/game/board-square/board-square.component';
import {GameService} from "./components/game/game.service";

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    NavbarComponent,
    CarDetailsComponent,
    AddNewCarComponent,
    OtherComponent,
    TicTacToeComponent,
    BoardComponent,
    BoardSquareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    IvyCarouselModule,
    // ToastrModule added
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
