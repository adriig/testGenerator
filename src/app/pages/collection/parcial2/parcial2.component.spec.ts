import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial2Component } from './parcial2.component';

describe('Parcial2Component', () => {
  let component: Parcial2Component;
  let fixture: ComponentFixture<Parcial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parcial2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parcial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
