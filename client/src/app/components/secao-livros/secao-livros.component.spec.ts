import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoLivrosComponent } from './secao-livros.component';

describe('SecaoLivrosComponent', () => {
  let component: SecaoLivrosComponent;
  let fixture: ComponentFixture<SecaoLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecaoLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
