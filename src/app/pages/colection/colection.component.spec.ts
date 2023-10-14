import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionComponent } from './colection.component';

describe('ColectionComponent', () => {
  let component: ColectionComponent;
  let fixture: ComponentFixture<ColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
