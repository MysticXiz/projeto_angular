import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
temlivros = true
livros: any[] = []
slides : any[] = [{
  "id": "1",
  "nome": "Livro 1",
},
{
  "id": "2",
  "nome": "Livro 2",
},
{
  "id": "3",
  "nome": "Livro 3",
},
{
  "id": "4",
  "nome": "Livro 4",
},
{
  "id": "5",
  "nome": "Livro 5",
},
]
ngOnInit(): void {
  fetch('')
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
