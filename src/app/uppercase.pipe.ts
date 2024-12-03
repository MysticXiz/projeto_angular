import { Pipe, PipeTransform } from '@angular/core';
 //pipe personalizado
@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase(); // Converte o texto para letras maiúsculas
  }
}
