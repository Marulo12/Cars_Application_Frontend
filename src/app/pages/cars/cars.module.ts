import { NgModule } from '@angular/core';
import { CarsRoutingModule } from './cars-routing.module';
import { CommonsModule } from 'src/app/shared/modules/commons/commons.module';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { CarsComponent } from './cars.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';


@NgModule({
  declarations: [
    CarsComponent,
    ListCarsComponent
  ],
  imports: [
    CommonsModule,
    PrimengModule,
    CarsRoutingModule
  ]
})

export class CarsModule { }
