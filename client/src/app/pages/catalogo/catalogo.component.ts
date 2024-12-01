import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'

})
export class CatalogoComponent {
  livros: any = [{
    "titulo": "Aleatório",
    "itens": [

    ]
  },
  {
    "titulo": "Romance",
    "itens": [

    ]
  },
  {
    "titulo": "Aventura",
    "itens": [

    ]
  },

];
  temlivros: boolean = true;
  carregando: boolean = true;


  constructor(
    private apiService: ApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getData1().subscribe(
      (data) => {
        this.livros[0].itens = data.docs;
        this.carregando = false;
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );
    this.apiService.getData2().subscribe(
      (data) => {
        this.livros[1].itens = data.docs;
        //console.log(this.livros);
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );
    this.apiService.getData3().subscribe(
      (data) => {
        this.livros[2].itens = data.docs;
        //console.log(this.livros);
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );

  }
}
