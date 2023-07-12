import { Brand } from "./brand.model";
import { Model } from "./model.model";

export interface Car {
  id: number;
  price?: number;
  year: number;
  color: string;
  mileage: number;
  vIN: string;
  model: Model;
  brand: Brand;
}
