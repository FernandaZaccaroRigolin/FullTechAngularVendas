import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from '../../components/itens/item/item.component';
import { ItemNovoComponent } from '../../components/itens/item-novo/item-novo.component';
import { ItemListaComponent } from '../../components/itens/item-lista/item-lista.component';
import { ProdutosService } from 'src/app/services/produtos.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ItemService } from 'src/app/services/item.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemComponent,
    ItemNovoComponent,
    ItemListaComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule
  ],
  providers:[
    ProdutosService, 
    PedidosService,
    ItemService
  ]
})
export class ItemModule { }
