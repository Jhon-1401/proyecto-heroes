import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioPipeComponent } from './ejercicio-pipe.component';

describe('EjercicioPipeComponent', () => {
  let component: EjercicioPipeComponent;
  let fixture: ComponentFixture<EjercicioPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
