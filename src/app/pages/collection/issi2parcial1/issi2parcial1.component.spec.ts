import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issi2parcial1Component } from './issi2parcial1.component';

describe('Issi2parcial1Component', () => {
  let component: Issi2parcial1Component;
  let fixture: ComponentFixture<Issi2parcial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issi2parcial1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issi2parcial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
