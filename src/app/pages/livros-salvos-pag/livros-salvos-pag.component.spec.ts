import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosSalvosPagComponent } from './livros-salvos-pag.component';

describe('LivrosSalvosPagComponent', () => {
  let component: LivrosSalvosPagComponent;
  let fixture: ComponentFixture<LivrosSalvosPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivrosSalvosPagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosSalvosPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
