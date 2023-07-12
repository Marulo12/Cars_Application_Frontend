import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      { path: '', redirectTo: 'list-cars', pathMatch: 'full' },
      { path: 'list-cars', component: ListCarsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
