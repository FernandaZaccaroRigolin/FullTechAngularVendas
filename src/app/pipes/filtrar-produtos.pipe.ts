import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'filtrarprodutos'
})
export class FiltrarProdutosPipe implements PipeTransform {

  transform(value: Produto[], input: string): Produto[] {
    if(!input){
      return value;
    } else {
      return value.filter(p => p.descricao.toLowerCase().includes(input.toLowerCase()));
    }
  }

}
