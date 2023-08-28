import { Pipe, PipeTransform } from '@angular/core';

/*
  este pipe acrescenta ao item, a quantidade de caracteres
  válidos (diferentes de espaço).
*/
@Pipe({
  name: 'descsize'
})
export class DescSizePipe implements PipeTransform {

  transform(value: string): string {
    let size: number = value.replace(' ', '').length;
    return `${value} (${size})`;
  }

}
