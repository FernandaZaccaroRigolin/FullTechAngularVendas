import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-alteracao',
  templateUrl: './cliente-alteracao.component.html',
  styleUrls: ['./cliente-alteracao.component.css']
})
export class ClienteAlteracaoComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: ClientesService) { }

    cliente: Cliente = new Cliente();
    cpf!: string;

  ngOnInit(): void {
    //const cpf = this.route.snapshot.paramMap.get('id') as string;
    //this.buscar(cpf);

    this.cpf = this.route.snapshot.paramMap.get('id') as string;
    this.buscar(this.cpf);
  }

  buscar(cpf: string) : void {
    this.service.getClienteApi(cpf)
      .subscribe(resposta => this.cliente = resposta);
  }

  fechar() : void {
    this.router.navigate(['/clientes']);
  }

  alterar(cliente: Cliente) : void {
    this.service.putClienteApi(cliente, this.cpf)
      .subscribe({
        complete: () => this.fechar(),
        error: erro => {
          console.error(erro);
          window.alert(erro);
        }
      });
  }


}
