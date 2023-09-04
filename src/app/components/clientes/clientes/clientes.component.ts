import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private router: Router) { }

  // esta propriedade terá seu valor repassado para o componente filho (<app-clientes-lista>)
  valorTitulo: string = "Listagem de Clientes";


  novoCliente() : void {
    this.router.navigate(['clientes/novo']);
  }
}
