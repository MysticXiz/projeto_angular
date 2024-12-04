import { ApiService } from './../../services/api/api.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-livros-salvos',
  templateUrl: './livros-salvos.component.html',
  styleUrl: './livros-salvos.component.css'
})
export class LivrosSalvosComponent {
  livroIds: string[] = [];
  livros_info: any[] = []
  constructor(private localStorageService: LocalStorageService, private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Recupera os IDs armazenados
    this.livroIds = this.localStorageService.getIds();
    console.log('IDs de livros armazenados:', this.livroIds);
    this.carregarDetalhesLivro(this.livroIds)
  }
  carregarDetalhesLivro(ids: string[]): void {
    if (ids && ids.length > 0) {
      for (let id of ids) {
        this.apiService.getLivroDetalhes(id).subscribe(
          (data) => {
            const idFormatado = `OLID:${id}`
            this.livros_info.push(data[idFormatado]);
          },
          (error) => {
            console.error('Erro ao buscar detalhes do livro:', error);
          }
        );
      }
    }
  }
  deletarDalista(id: string): void {
    // Remove o ID específico da lista de IDs armazenados
    this.localStorageService.removerId(id);
    // Atualiza a lista de IDs e detalhes dos livros após remoção
    this.livroIds = this.localStorageService.getIds();
    this.livros_info = this.livros_info.filter(livro => livro.id !== `OLID:${id}`);
    this.cdr.detectChanges()
  }
}

