import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
@Component({
  selector: 'secao-livros',
  templateUrl: './secao-livros.component.html',
  styleUrl: './secao-livros.component.css'
})
export class SecaoLivrosComponent implements OnInit{
  livros: any[] = [];
  temlivros = true;

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
}



