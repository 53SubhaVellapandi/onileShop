import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcradComponent } from './productcrad.component';

describe('ProductcradComponent', () => {
  let component: ProductcradComponent;
  let fixture: ComponentFixture<ProductcradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
