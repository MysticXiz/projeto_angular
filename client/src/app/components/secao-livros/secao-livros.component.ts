import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'secao-livros',
  templateUrl: './secao-livros.component.html',
  styleUrl: './secao-livros.component.css'
})
export class SecaoLivrosComponent {
 
 
  livros: any[] = [];
  
  temlivros = true;
/*
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (data) => {
        this.livros = data.docs; // Acessando os dados retornados
        //console.log(this.livros); para exibir os dados no console
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );
  }
    */
  constructor(private apiService: ApiService) {}
}



