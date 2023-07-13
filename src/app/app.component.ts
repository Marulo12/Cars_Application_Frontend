import { Component } from '@angular/core';
import {  PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation({
      contains: 'Contiene',
      equals: 'Igual',
      noFilter: 'No Filtros',
      notContains: 'No Contiene',
      notEquals: 'No Igual',
      startsWith: 'Comienza Con',
      matchAll: 'Coincidir Todo',
      matchAny: 'Coincidir Con Alguno',
      endsWith: 'Termina Con',
      gt: 'Mayor Que',
      lt: 'Menor Que',
      lte: 'Menor o Igual Que',
      gte: 'Mayor o Igual Que',
      addRule: 'Agregar Regla',
      removeRule: 'Quitar Regla',
      clear: 'Limpiar',
      apply: 'Aplicar'
  });
  }

}
