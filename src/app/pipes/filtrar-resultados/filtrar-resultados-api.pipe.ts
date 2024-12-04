import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarResultadosApi'
})
export class FiltrarResultadosApiPipe implements PipeTransform {
  transform(valor: any, retorno: string = 'Indisponível'): string {
    if (Array.isArray(valor)) {
      return valor.join(', ');
    }
    return valor || retorno;
  }
}
