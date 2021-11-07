import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CarsService} from "../../services/cars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModifyCarDto} from "../../dtos/ModifyCarDto";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  companyFormControl = new FormControl('', [Validators.required]);
  modelFormControl = new FormControl('', [Validators.required]);
  numberOfDoorsFormControl = new FormControl('', [Validators.required]);

  modifyCar: ModifyCarDto = new ModifyCarDto();
  carId: string;

  constructor(private toastr: ToastrService, private carsService: CarsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    this.carsService.getCar(this.carId).subscribe(value => {
      this.modifyCar = value;
    })
  }

  editCar(): void {
    if (this.companyFormControl.invalid || this.modelFormControl.invalid || this.numberOfDoorsFormControl.invalid) {
      this.companyFormControl.markAsTouched();
      this.modelFormControl.markAsTouched();
      this.numberOfDoorsFormControl.markAsTouched();

      this.toastr.error('Wypelnij poprawnie wszystkie pola!');
      return;
    }

    this.modifyCar = new ModifyCarDto();
    this.modifyCar.id = this.carId;
    this.modifyCar.company = this.companyFormControl.value;
    this.modifyCar.model = this.modelFormControl.value;
    this.modifyCar.numberOfDoors = this.numberOfDoorsFormControl.value;

    this.carsService.modifyCar(this.modifyCar).subscribe(() => {
      this.toastr.success("Zedytowano samochod!");
      this.router.navigate(['/cars-list'])
    }, error => {
      this.toastr.error("Blad edycji samochodu");
    })
  }
}
