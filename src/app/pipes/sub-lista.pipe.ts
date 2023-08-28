import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../classes/cliente';

/*
  - Objetivo do pipe: filtrar uma lista com base em uma condição
  - Elemento base (alvo): lista de clientes - original
  - Resultado esperado: lista de clientes - filtrada
*/

@Pipe({
  name: 'sublista'
})
export class SubListaPipe implements PipeTransform {

  transform(value: Cliente[], input: string): Cliente[] {
    return !input ? value : 
      value.filter(p => p.nome.toLowerCase().includes(input.toLowerCase()));
  }

}
