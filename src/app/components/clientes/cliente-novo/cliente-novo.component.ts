import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent {

  constructor(
    private router: Router, 
    private service: ClientesService) {}

  cliente: Cliente = new Cliente();

  fechar() : void{
    this.router.navigate(['clientes']);
  }

  incluir(cliente: Cliente) : void {
    this.service.postClienteApi(cliente)
      .subscribe({
        
        complete: () => this.fechar(),
        error: erro => {
          console.error(erro);
          window.alert(erro);
        }
      });
  }
}
