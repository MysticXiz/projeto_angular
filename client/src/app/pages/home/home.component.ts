import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

constructor(){}
}
// https://openlibrary.org/search.json?q=bestsellers&limit=20
