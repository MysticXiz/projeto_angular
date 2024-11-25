import { Component, OnInit} from '@angular/core';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-secao-livrosficcao',
  templateUrl: './secao-livrosficcao.component.html',
  styleUrl: './secao-livrosficcao.component.css'
})
export class SecaoLivrosficcaoComponent implements OnInit{


  livros: any[] = [];
  temlivros = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFictionData().subscribe(
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
