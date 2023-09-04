import { Component, OnInit } from '@angular/core';
import { ClientePedidosDTO } from 'src/app/classes/cliente-pedidos-dto';
import { ItensPedidoDTO } from 'src/app/classes/itens-pedido-dto';
import { ItemService } from 'src/app/services/item.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {
  
  constructor(
    private pedidosService: PedidosService, 
    private itemService: ItemService) { }
  
  ngOnInit(): void {
    this.listarPedidos();
  }

  pedidos: ClientePedidosDTO[] = [];
  itens: ItensPedidoDTO[] = [];

  listarPedidos() : void {
    this.pedidosService.getPedidosApi().subscribe(res => this.pedidos = res);
  }

  listarItens(idPedido?: number) :void {
    if(!idPedido) {
      this.itens = [];
    } else {
      this.itemService.getItensApi(idPedido).subscribe(res => this.itens = res);
    }
  }

  selecionar(id?: string) : void {
    this.listarItens(parseInt(id as string));
  }
}
