import { createReducer, on } from '@ngrx/store';
import { Car } from 'src/app/models/car.model';
import { cleanCars, getCars, getCarsLoaded } from './cars.actions';

export const initialState: Array<Car> = [];

export const carsReducer = createReducer(
  initialState,
  on(getCarsLoaded, (state,{cars}) => cars),
  on(cleanCars, (state) => initialState)
);
