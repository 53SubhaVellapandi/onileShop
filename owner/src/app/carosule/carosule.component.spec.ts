import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosuleComponent } from './carosule.component';

describe('CarosuleComponent', () => {
  let component: CarosuleComponent;
  let fixture: ComponentFixture<CarosuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarosuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
