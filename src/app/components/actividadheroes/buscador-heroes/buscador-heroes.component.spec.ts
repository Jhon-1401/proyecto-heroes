import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorHeroesComponent } from './buscador-heroes.component';

describe('BuscadorHeroesComponent', () => {
  let component: BuscadorHeroesComponent;
  let fixture: ComponentFixture<BuscadorHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
