import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from "./components/cars-list/cars-list.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {AddNewCarComponent} from "./components/add-new-car/add-new-car.component";
import {OtherComponent} from "./components/other/other.component";
import {TicTacToeComponent} from "./components/game/tic-tac-toe/tic-tac-toe.component";

const routes: Routes = [
  {path: '', redirectTo: 'cars-list', pathMatch: 'full'},
  {path: 'cars-list', component: CarsListComponent},
  {path: 'car-details/:id', component: CarDetailsComponent},
  {path: 'add-new-car', component: AddNewCarComponent},
  {path: 'other', component: OtherComponent},
  {path: 'ticTacToe', component: TicTacToeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
