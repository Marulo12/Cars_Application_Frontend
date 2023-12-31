import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car, NewCar, UpdateCar } from '../models/car.model';
import { environment } from 'src/environments/environment.development';
import { ResponseApi } from '../models/responseApi.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  constructor(private httpClient: HttpClient) {}

  getCars(){
    return this.httpClient.get<Array<Car>>(environment.server + environment.controllers.cars.getCars);
  }

  deleteCar(idCar:number){
    return this.httpClient.delete<ResponseApi<string>>(environment.server + environment.controllers.cars.deleteCar + '/' + idCar);
  }

  newCar(car: NewCar){
   return  this.httpClient.post<ResponseApi<string>>(environment.server + environment.controllers.cars.newCar, car);
  }

  updateCar(car: UpdateCar){
    return  this.httpClient.put<ResponseApi<string>>(environment.server + environment.controllers.cars.updateCar, car);
   }
}
