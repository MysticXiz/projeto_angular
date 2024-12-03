import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circulo-carregamento',
  templateUrl: './circulo-carregamento.component.html',
  styleUrl: './circulo-carregamento.component.css'
})
export class CirculoCarregamentoComponent {
  constructor() {}
  @Input() mostrar: boolean = false;
}

