import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-new-edit-car-modal',
  templateUrl: './new-edit-car-modal.component.html',
  styleUrls: ['./new-edit-car-modal.component.scss'],
})
export class NewEditCarModalComponent implements OnInit {
  isNew: boolean = false;
  car?: Car;
  formGroup!: FormGroup;
  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private formBuilder: FormBuilder
  ) {
    this.isNew = this.dynamicDialogConfig.data.isNew;
    this.car = this.dynamicDialogConfig.data.car;
  }

  ngOnInit(): void {
   this.createForm();
  }

  createForm(){
    this.formGroup = this.formBuilder.group({
      id:[null],
      color:[''],
      price:[null],
      year:[null],
      mileage:[null],
      vin:[''],
      idModel:[null],
      idBrand:[null]
    });
  }

  onChangeBrand(event:any){

  }


}
