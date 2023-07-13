import { NgModule } from '@angular/core';
import { AlertsComponent } from './alerts/alerts.component';
import { CommonsModule } from '../modules/commons/commons.module';
import { PrimengModule } from '../modules/primeng/primeng.module';

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonsModule,
    PrimengModule
  ],
  exports:[AlertsComponent]
})
export class ComponentsModule { }
