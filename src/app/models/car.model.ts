import { Brand } from "./brand.model";
import { Model } from "./model.model";

export interface Car {
  id: number;
  price?: number;
  year: number;
  color: string;
  mileage: number;
  vin: string;
  model: Model;
  brand: Brand;
}

export interface NewCar {
  price?: number;
  year: number;
  color: string;
  mileage: number;
  vin: string;
  idModel: number;
  idBrand: number;
}

export interface UpdateCar extends NewCar{
  id: number;
}
