import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { cleanCars, getCars } from 'src/app/store/cars/cars.actions';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit {
  cars$: Observable<Array<Car>>;
  cars: Array<Car>;

  constructor(private store: Store<{ cars: Array<Car> }>) {
    this.cars = [];
    this.cars$ = store.select((s) => s.cars);
    this.cars$.subscribe((r) => {
      this.cars = r;
    });
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.store.dispatch(getCars());
  }

  clear() {
    this.store.dispatch(cleanCars());
  }

  refresh() {
    this.getCars();
  }

}
