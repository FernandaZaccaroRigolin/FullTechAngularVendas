import { Component, OnInit } from '@angular/core';
import { ClientePedidosDTO } from 'src/app/classes/cliente-pedidos-dto';
import { ItemNovoDTO } from 'src/app/classes/item-novo-dto';
import { Produto } from 'src/app/classes/produto';
import { ItemService } from 'src/app/services/item.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-item-novo',
  templateUrl: './item-novo.component.html',
  styleUrls: ['./item-novo.component.css']
})
export class ItemNovoComponent implements OnInit {
  
  constructor(
    private produtosService: ProdutosService, 
    private pedidosService: PedidosService, 
    private itemService: ItemService) { }

  produtos: Produto[] = [];
  pedidos: ClientePedidosDTO[] = [];

  resposta!: string;
  estilo!: string;

  item: ItemNovoDTO = new ItemNovoDTO();

  ngOnInit(): void {
    this.listarPedidos();
    this.listarProdutos();
  }

  listarProdutos() : void {
    this.produtosService.getProdutosApi().subscribe(res => this.produtos = res);
  }
  listarPedidos() : void {
    this.pedidosService.getPedidosApi().subscribe(res => this.pedidos = res);
  }

  incluirItem(item: ItemNovoDTO) : void {
    this.itemService.postItemApi(item).subscribe({
      next: res => {
        console.log(res);
        this.resposta = "Item adicionado ao pedido corretamente!"
        this.estilo = "alert alert-primary";
      },

      error: erro => {
        this.resposta = erro.message;
        this.estilo = "alert alert-danger";
      }
    });
  }
}
