import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperpageComponent } from './shopperpage.component';

describe('ShopperpageComponent', () => {
  let component: ShopperpageComponent;
  let fixture: ComponentFixture<ShopperpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
