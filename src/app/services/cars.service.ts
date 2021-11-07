import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarListDto} from "../dtos/CarListDto";
import {environment} from "../../environments/environment";
import {AddNewCar} from "../dtos/AddNewCar";
import {ModifyCarDto} from "../dtos/ModifyCarDto";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {
  }

  getCarsList(): Observable<CarListDto[]> {
    return this.http.get<CarListDto[]>(environment.backendUrl + "/all");
  }

  removeCar(id): Observable<void> {
    return this.http.delete<void>(environment.backendUrl + "/" + id);
  }

  addNewCar(addNewCar: AddNewCar): Observable<void> {
    return this.http.post<void>(environment.backendUrl, addNewCar);
  }

  modifyCar(modifyCar: ModifyCarDto): Observable<void> {
    return this.http.put<void>(environment.backendUrl + "/" + modifyCar.id, modifyCar);
  }

  getCar(carId: string): Observable<ModifyCarDto> {
    return this.http.get<ModifyCarDto>(environment.backendUrl + "/" + carId);
  }
}
