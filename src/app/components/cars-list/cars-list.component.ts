import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {CarListDto} from "../../dtos/CarListDto";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carsList: CarListDto[];

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getCarsList().subscribe(value => {
      this.carsList = value;
    })
  }

}
