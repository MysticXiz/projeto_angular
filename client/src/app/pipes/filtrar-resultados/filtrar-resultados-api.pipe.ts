import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarResultadosApi'
})
export class FiltrarResultadosApiPipe implements PipeTransform {
  transform(value: any, fallback: string = 'Indisponível'): string {
    // Se o valor for um array, junta os elementos com ', '
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    // Se o valor for nulo ou indefinido, retorna o fallback
    return value || fallback;
  }
}
