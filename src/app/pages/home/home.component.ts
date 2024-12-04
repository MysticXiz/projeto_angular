import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  livros: any = [];
  temlivros: boolean = true;
  carregando: boolean = true;

  constructor(
    private apiService: ApiService,
    public router: Router,
  ) {}
 ngOnInit(): void{
   this.apiService.getDataBestsellers().subscribe(
     (data) => {
       this.livros = data.docs;
       this.carregando = false;
     },
     (error) => {
       console.error('Erro ao buscar livros:', error);
     }
   );
   
 }

}
