import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit{
  
  constructor(private clienteService: ClientesService){}

  clientes: Cliente[] = [];

  listarClientes() : void{
    this.clienteService.getClientesApi().subscribe(
      resposta => this.clientes = resposta);  
  }

  ngOnInit(): void {
    this.listarClientes();
  }
}



 
