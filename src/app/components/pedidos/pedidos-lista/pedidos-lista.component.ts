import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { ClientePedidosDTO } from 'src/app/classes/cliente-pedidos-dto';
import { ClientesService } from 'src/app/services/clientes.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-lista',
  templateUrl: './pedidos-lista.component.html',
  styleUrls: ['./pedidos-lista.component.css']
})
export class PedidosListaComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private pedidosService: PedidosService, 
    private clientesService: ClientesService) { }
  
  cpf!: string;  

  pedidos : ClientePedidosDTO[] = [];
  cliente!: Cliente;

  ngOnInit(): void {
    this.cpf = this.route.snapshot.paramMap.get('cpf') as string;
    this.listarPedidos(this.cpf);
    if(this.cpf) {
      this.buscarCliente(this.cpf);
    }
  }

  listarPedidos(cpf: string) : void {
    this.pedidosService.getPedidosApi(cpf)
      .subscribe(resposta => this.pedidos = resposta);
  }

  buscarCliente(cpf: string) :void {
    this.clientesService.getClienteApi(cpf)
      .subscribe(resposta => this.cliente = resposta);
  }

  fechar() : void {
    if(this.cliente){
      this.router.navigate(['clientes']);
    } else {
      this.router.navigate(['pedidos']);
    }
  }
}
