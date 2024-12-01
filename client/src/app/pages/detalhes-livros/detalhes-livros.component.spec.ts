import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLivrosComponent } from './detalhes-livros.component';

describe('DetalhesLivrosComponent', () => {
  let component: DetalhesLivrosComponent;
  let fixture: ComponentFixture<DetalhesLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
