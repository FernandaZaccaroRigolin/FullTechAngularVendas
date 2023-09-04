import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  
  @Input() titulo: string = "";

  constructor(private service: ClientesService) { }

  clientes : Cliente[] = [];

  dataAtual : Date = new Date(); // data atual para exibição da lista

  listarClientes() : void {
    this.service.getClientesApi().subscribe(resposta => this.clientes = resposta);
  }
  ngOnInit(): void {
    this.listarClientes();
  }

}
