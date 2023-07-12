import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../models/model.model';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ModelService {
  constructor(private httpClient: HttpClient) {}

  getModelsByIdBrand(idBrand: number) {
    return this.httpClient.get<Array<Model>>(
      environment.server +
        environment.controllers.models.getModelsByBrand +
        '?idBrand=' +
        idBrand
    );
  }
}
