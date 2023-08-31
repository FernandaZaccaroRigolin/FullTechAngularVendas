import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  constructor(private router: Router) {}

  novoPedido() : void {
    this.router.navigate(['pedidos/novo'])
  }

  todosPedidos() : void {
    this.router.navigate(['pedidos/lista'])
  }
}
