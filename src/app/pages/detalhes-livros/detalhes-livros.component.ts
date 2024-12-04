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
  salvo: boolean = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private localStorage: LocalStorageService) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log('ID do livro:', this.id);
       this.carregarDetalhesLivro(this.id);
       this.verificarSalvamento(this.id);
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
    if (this.salvo === true){
      this.deletarDalista(this.id)
      this.salvo = false;
    }else{
      this.localStorage.salvarId(this.id)
      console.log("id salvo"+ this.id)
      this.salvo = true;
    }
  }
  verificarSalvamento(id: string): void {
    const idsSalvos = this.localStorage.getIds();
    this.salvo = idsSalvos.includes(id);
  }
  deletarDalista(id: string): void {
    // Remove o ID específico da lista de IDs armazenados
    this.localStorage.removerId(id);
    // Atualiza a lista de IDs e detalhes dos livros após remoção
  }
}
