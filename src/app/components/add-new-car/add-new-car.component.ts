import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AddNewCar} from "../../dtos/AddNewCar";
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  companyFormControl = new FormControl('', [Validators.required]);
  modelFormControl = new FormControl('', [Validators.required]);
  numberOfDoorsFormControl = new FormControl('', [Validators.required]);

  addNewCar: AddNewCar;

  constructor(private toastr: ToastrService, private carsService: CarsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createNewCar(): void {
    if (this.companyFormControl.invalid || this.modelFormControl.invalid || this.numberOfDoorsFormControl.invalid) {
      this.companyFormControl.markAsTouched();
      this.modelFormControl.markAsTouched();
      this.numberOfDoorsFormControl.markAsTouched();

      this.toastr.error('Wypelnij poprawnie wszystkie pola!');
      return;
    }

    this.addNewCar = new AddNewCar();
    this.addNewCar.company = this.companyFormControl.value;
    this.addNewCar.model = this.modelFormControl.value;
    this.addNewCar.numberOfDoors = this.numberOfDoorsFormControl.value;

    this.carsService.addNewCar(this.addNewCar).subscribe(() => {
      this.toastr.success("Dodano nowy samochod!");
      this.router.navigate(['/cars-list'])
    }, error => {
      this.toastr.error("Blad tworzenia nowego samochodu");
    })
  }

}
