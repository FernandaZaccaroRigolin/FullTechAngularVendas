import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from '../../components/pedidos/pedidos/pedidos.component';
import { PedidoNovoComponent } from '../../components/pedidos/pedido-novo/pedido-novo.component';
import { PedidosListaComponent } from '../../components/pedidos/pedidos-lista/pedidos-lista.component';
import { PedidosService } from 'src/app/services/pedidos.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidosComponent,
    PedidoNovoComponent,
    PedidosListaComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule
  ],
  providers: [
    PedidosService
  ]
})
export class PedidosModule { }
