import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {CarListDto} from "../../dtos/CarListDto";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carsList: CarListDto[];

  constructor(private carsService: CarsService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.carsService.getCarsList().subscribe(value => {
      this.carsList = value;
    })
  }

  editCar(id) {
    this.router.navigate(["/car-details/" + id]);
  }

  removeCar(id) {
    this.carsService.removeCar(id).subscribe(() => {
      this.toastr.success("Poprawnie usunieto samochod!")
      this.ngOnInit();
    })
  }
}
