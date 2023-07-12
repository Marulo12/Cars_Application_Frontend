import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditCarModalComponent } from './new-edit-car-modal.component';

describe('NewEditCarModalComponent', () => {
  let component: NewEditCarModalComponent;
  let fixture: ComponentFixture<NewEditCarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEditCarModalComponent]
    });
    fixture = TestBed.createComponent(NewEditCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
