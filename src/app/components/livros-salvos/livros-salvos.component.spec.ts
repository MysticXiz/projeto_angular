import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosSalvosComponent } from './livros-salvos.component';

describe('LivrosSalvosComponent', () => {
  let component: LivrosSalvosComponent;
  let fixture: ComponentFixture<LivrosSalvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivrosSalvosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosSalvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
