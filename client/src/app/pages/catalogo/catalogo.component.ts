import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'

})
export class CatalogoComponent {
  temlivros = true
  livros: any[] = []
  ngOnInit(): void {
    fetch('https://openlibrary.org/search.json?q=bestsellers&limit=20')
      .then(response => response.json())
      .then(data => {
        this.livros = data.docs
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error)
      });
      console.log(this.livros)
  }



  activeIndex: number = 0;

  nextSlide(): void {
    if (this.activeIndex < this.livros.length - 1) {
      this.activeIndex++;
    }
  }


  prevSlide(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }


  isActive(index: number): boolean {
    return index === this.activeIndex;
  }
}
