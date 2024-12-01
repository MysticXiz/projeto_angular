import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoCarregamentoComponent } from './circulo-carregamento.component';

describe('CirculoCarregamentoComponent', () => {
  let component: CirculoCarregamentoComponent;
  let fixture: ComponentFixture<CirculoCarregamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CirculoCarregamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculoCarregamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
