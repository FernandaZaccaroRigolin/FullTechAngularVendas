import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from '../../components/pedidos/pedidos/pedidos.component';
import { PedidoNovoComponent } from '../../components/pedidos/pedido-novo/pedido-novo.component';
import { PedidosListaComponent } from '../../components/pedidos/pedidos-lista/pedidos-lista.component';


@NgModule({
  declarations: [
    PedidosComponent,
    PedidoNovoComponent,
    PedidosListaComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
