import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {CarListDto} from "../../dtos/CarListDto";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['no', 'company', 'model', 'numberOfDoors', 'action'];
  carsList: CarListDto[];
  dataSource = new MatTableDataSource<CarListDto>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private carsService: CarsService, private toastr: ToastrService, private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.carsService.getCarsList().subscribe(value => {
      this.carsList = value;
      this.dataSource.data = this.carsList;
      this.cdr.detectChanges();
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
