import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(private apiService: ApiService) {}
  tituloHeader: string = 'Booksopen';
  resultados: any = [];
  carregando: boolean = false;
  pesquisarTimeout: any = null;

  ngAfterViewInit() {
    const modal = document.getElementById('searchModal');

    if (modal) {
      modal.addEventListener('shown.bs.modal', () => {
        this.searchInput.nativeElement.focus();
      });
    }
  }

  pesquisar(input: string) {
    if (this.pesquisarTimeout) {
      clearTimeout(this.pesquisarTimeout);
    }

    if (input.trim() !== '') {
      this.carregando = true;
      this.pesquisarTimeout = setTimeout(() => {
        const inputFormatado = input.replace(/ /g, '+');
        this.pegarDados(inputFormatado);
      }, 500);
    }
  }

  pegarDados(input: string) {
    this.apiService.getPesquisa(input).subscribe(
      (data) => {
        this.resultados = data.docs;
        this.carregando = false;
        console.log(this.resultados);
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );
  }
}
