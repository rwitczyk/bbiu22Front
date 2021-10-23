import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarListDto} from "../dtos/CarListDto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {
  }

  getCarsList(): Observable<CarListDto[]> {
    return this.http.get<CarListDto[]>(environment.backendUrl + "/all");
  }
}
