import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issi2parcial2Component } from './issi2parcial2.component';

describe('Issi2parcial2Component', () => {
  let component: Issi2parcial2Component;
  let fixture: ComponentFixture<Issi2parcial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issi2parcial2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issi2parcial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
