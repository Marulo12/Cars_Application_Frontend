import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand.model';
import { environment } from 'src/environments/environment.development';

@Injectable({providedIn: 'root'})
export class BrandService {
  constructor(private httpClient: HttpClient) { }

  getBrands(){
    return this.httpClient.get<Array<Brand>>(environment.server + environment.controllers.brands.getBrands);
  }
}
