import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-detalhes-livros',
  templateUrl: './detalhes-livros.component.html',
  styleUrls: ['./detalhes-livros.component.css']
})
export class DetalhesLivrosComponent implements OnInit {
  livro: any = {};
  carregando: boolean = true;
  id: string = ''
  constructor(private route: ActivatedRoute, private apiService: ApiService, private localStorage: LocalStorageService) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log('ID do livro:', this.id);
       this.carregarDetalhesLivro(this.id);
     });

  }
  formatarNomes(array: any[], propriedade: string): string {
    if (!array || array.length === 0) {
      return 'Indisponível';
    }
    return array.map(item => item[propriedade] || 'Indisponível').join(', ');
  }
  carregarDetalhesLivro(id: string): void {
     if (id) {
       this.apiService.getLivroDetalhes(id).subscribe(
         (data) => {
           const livro_id = `OLID:${id}`
           this.livro = data[livro_id];
           this.carregando = false;

         },
         (error) => {
           console.error('Erro ao buscar detalhes do livro:', error);
         }
       );
     }
  }
  salvarLivros(){
    this.localStorage.salvarId(this.id)
    console.log("id salvo"+ this.id)
  }
}
