import { Component, OnInit } from '@angular/core';
import { ClientePedidosDTO } from 'src/app/classes/cliente-pedidos-dto';
import { Produto } from 'src/app/classes/produto';
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
    private pedidosService: PedidosService) { }

  produtos: Produto[] = [];
  pedidos: ClientePedidosDTO[] = [];

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
}
