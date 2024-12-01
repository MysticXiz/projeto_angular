import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoLivrosficcaoComponent } from './secao-livrosficcao.component';

describe('SecaoLivrosficcaoComponent', () => {
  let component: SecaoLivrosficcaoComponent;
  let fixture: ComponentFixture<SecaoLivrosficcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecaoLivrosficcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoLivrosficcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
