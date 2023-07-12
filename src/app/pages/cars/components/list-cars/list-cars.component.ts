import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { cleanCars, getCars } from 'src/app/store/cars/cars.actions';
import { NewEditCarModalComponent } from '../modals/new-edit-car-modal/new-edit-car-modal.component';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit {
  cars$: Observable<Array<Car>>;
  cars: Array<Car>;
  @ViewChild('carsTable') carsTable!: Table;
  constructor(
    private store: Store<{ cars: Array<Car> }>,
    private carService: CarService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) {
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
    this.carsTable.clearFilterValues();
    this.getCars();
  }

  deleteCar(idCar: number) {
    this.confirmationService.confirm({
      message: 'Esta seguro de eliminar el automóvil?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      key: 'confirmDialog',
      accept: () => {
        this.carService.deleteCar(idCar).subscribe((r) => {
          if (r.success) {
            this.messageService.add({
              severity: 'success',
              detail: r.message,
              key: 'success',
              summary: 'Notificacion',
            });
            this.getCars();
          }
        });
      },
    });
  }

  openDialogCar(isNew: boolean, car?: Car) {
    let dialog = this.dialogService.open(NewEditCarModalComponent, {
      header: (isNew ? 'Nuevo ' : 'Editar ') + 'Automovil',
      width: '65vw',
      data: {
        car,
        isNew,
      },
      closable: false
    });

    dialog.onClose.subscribe((r) => {
        this.getCars();
    });
  }
}
