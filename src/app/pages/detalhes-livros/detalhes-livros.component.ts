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

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {

     this.route.params.subscribe(params => {
       const id = params['id'];
       console.log('ID do livro:', id);
       this.carregarDetalhesLivro(id);
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

}
