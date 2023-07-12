import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Brand } from 'src/app/models/brand.model';
import { Car } from 'src/app/models/car.model';
import { Model } from 'src/app/models/model.model';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-new-edit-car-modal',
  templateUrl: './new-edit-car-modal.component.html',
  styleUrls: ['./new-edit-car-modal.component.scss'],
})
export class NewEditCarModalComponent implements OnInit {
  isNew: boolean = false;
  car?: Car;
  formGroup!: FormGroup;
  brands: Array<Brand>;
  models: Array<Model>;

  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private modelService: ModelService,
    private messageService: MessageService,
    private carService: CarService,
    private confirmationService: ConfirmationService
  ) {
    this.isNew = this.dynamicDialogConfig.data.isNew;
    this.car = this.dynamicDialogConfig.data.car;
    this.brands = [];
    this.models = [];
  }

  ngOnInit(): void {
    this.createForm();
    this.getBrands();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.car?.id || null],
      color: [this.car?.color || '', [Validators.required]],
      price: [this.car?.price || null],
      year: [this.car?.year || null, [Validators.required]],
      mileage: [this.car?.mileage || null, [Validators.required]],
      vin: [this.car?.vin || '', [Validators.required]],
      model: [this.car?.model.id || null, [Validators.required]],
      brand: [this.car?.brand.id || null, [Validators.required]],
    });

    if (!this.isNew) {
      this.getModelsByIdBrand(this.car?.brand.id || 0);
    }
  }

  getBrands() {
    this.brandService.getBrands().subscribe((r) => {
      this.brands = r;
      if (this.isNew) {
        this.getModelsByIdBrand(r[0].id);
      }
    });
  }

  getModelsByIdBrand(idBrand: number) {
    this.modelService.getModelsByIdBrand(idBrand).subscribe((r) => {
      this.models = r;
    });
  }

  onChangeBrand({ value }: any) {
    this.getModelsByIdBrand(value);
  }

  close(isReload:boolean) {
    this.dynamicDialogRef.close(isReload);
  }

  acceptHandler() {
    if (this.formGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Notificacion',
        detail: 'Complete los campos',
        key: 'errors',
      });
      this.formGroup.markAllAsTouched();
      return;
    }

    if (this.isNew) {
      this.newCar();
    } else {
      this.updateCar();
    }
  }

  newCar() {
    this.confirmationService.confirm({
      message: 'Confirma la creacion del automóvil?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      key: 'confirmDialog',
      accept: () => {
        this.carService
          .newCar({
            color: this.formGroup.get('color')?.value,
            price: this.formGroup.get('price')?.value,
            vin: this.formGroup.get('vin')?.value,
            year: this.formGroup.get('year')?.value,
            idBrand: this.formGroup.get('brand')?.value,
            idModel: this.formGroup.get('model')?.value,
            mileage: this.formGroup.get('mileage')?.value,
          })
          .subscribe((r) => {
            if (r.success) {
              this.messageService.add({
                severity: 'success',
                detail: r.message,
                key: 'success',
                summary: 'Notificacion',
              });
              this.close(true);
            }
          });
      },
    });
  }

  updateCar() {
    this.confirmationService.confirm({
      message: 'Esta seguro de modificar el automóvil?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      key: 'confirmDialog',
      accept: () => {
        this.carService
          .updateCar({
            id: this.formGroup.get('id')?.value,
            color: this.formGroup.get('color')?.value,
            price: this.formGroup.get('price')?.value,
            vin: this.formGroup.get('vin')?.value,
            year: this.formGroup.get('year')?.value,
            idBrand: this.formGroup.get('brand')?.value,
            idModel: this.formGroup.get('model')?.value,
            mileage: this.formGroup.get('mileage')?.value,
          })
          .subscribe((r) => {
            if (r.success) {
              this.messageService.add({
                severity: 'success',
                detail: r.message,
                key: 'success',
                summary: 'Notificacion',
              });
              this.close(true);
            }
          });
      },
    });
  }
}
