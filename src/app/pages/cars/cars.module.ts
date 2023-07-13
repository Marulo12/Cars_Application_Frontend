import { NgModule } from '@angular/core';
import { CarsRoutingModule } from './cars-routing.module';
import { CommonsModule } from 'src/app/shared/modules/commons/commons.module';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { CarsComponent } from './cars.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { NewEditCarModalComponent } from './components/modals/new-edit-car-modal/new-edit-car-modal.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    CarsComponent,
    ListCarsComponent,
    NewEditCarModalComponent
  ],
  imports: [
    CommonsModule,
    PrimengModule,
    ComponentsModule,
    CarsRoutingModule
  ]
})

export class CarsModule { }
