import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from "./components/cars-list/cars-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'cars-list', pathMatch: 'full'},
  {path: 'cars-list', component: CarsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
