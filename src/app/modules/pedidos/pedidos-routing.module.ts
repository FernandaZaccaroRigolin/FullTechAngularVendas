import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoNovoComponent } from 'src/app/components/pedidos/pedido-novo/pedido-novo.component';
import { PedidosListaComponent } from 'src/app/components/pedidos/pedidos-lista/pedidos-lista.component';
import { PedidosComponent } from 'src/app/components/pedidos/pedidos/pedidos.component';

const routes: Routes = [
  { path: "", component: PedidosComponent },
  { path: "novo", component: PedidoNovoComponent},
  { path: "lista", component: PedidosListaComponent },
  { path: "lista/:cpf", component: PedidosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
