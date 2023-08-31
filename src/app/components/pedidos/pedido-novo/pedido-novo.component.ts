import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { PedidoClienteDTO } from 'src/app/classes/pedido-cliente-dto';
import { PedidoDTO } from 'src/app/classes/pedido-dto';
import { ClientesService } from 'src/app/services/clientes.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedido-novo',
  templateUrl: './pedido-novo.component.html',
  styleUrls: ['./pedido-novo.component.css']
})
export class PedidoNovoComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private clienteService: ClientesService, 
    private pedidosService: PedidosService) {}
  
  ngOnInit(): void {
    this.listarClientes();  
    this.pedidoDTO = {
      cpf: '', data: '', pedido: ''
    }
  }

  clientes: Cliente[] = [];
  //pedidoDTO : PedidoDTO = new PedidoDTO();
  pedidoDTO! : PedidoDTO;
  
  pedidoClienteDTO : PedidoClienteDTO | null = null;
  resposta: string = '';
  estilo: string = '';

  incluir(pedido: PedidoDTO) : void {
    
    if(!pedido.cpf){
      //window.alert('É necessário selecionar um cliente válido!');
      this.estilo = "alert alert-danger";
      this.resposta = "É necessário selecionar um cliente válido!";
    } else {

      this.pedidosService.postPedidoApi(pedido)
        .subscribe({
          next: res => {

            this.estilo = "alert alert-primary";
            this.resposta = "Pedido incluído com sucesso!";
          },
          error: erro => {
            this.estilo = "alert alert-danger";
            this.resposta = erro.message;
          }
        });
    }
  }

  listarClientes() : void {
    this.clienteService.getClientesApi()
      .subscribe(resposta => this.clientes = resposta);
  }

  fechar() : void {
    this.router.navigate(['pedidos']);
  }
}
