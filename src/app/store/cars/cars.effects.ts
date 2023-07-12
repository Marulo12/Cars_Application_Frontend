import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { CarService } from 'src/app/services/car.service';
import { getCars, getCarsLoaded } from './cars.actions';


@Injectable()
export class CarsEffects {

  loadCars$ = createEffect(() => this.actions$.pipe(
    ofType(getCars),
    exhaustMap(() => this.carService.getCars()
      .pipe(
        map(response => getCarsLoaded({cars:response})),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private carService: CarService
  ) {}
}
