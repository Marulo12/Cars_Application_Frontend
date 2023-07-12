import { createAction, props } from '@ngrx/store';
import { Car } from 'src/app/models/car.model';
export const getCars = createAction('[ListCars Component] GetCars');
export const getCarsLoaded = createAction('[ListCars Component] getCarsLoaded', props<{cars:Array<Car>}>());
export const cleanCars = createAction('[ListCars Component] CleanCars');
