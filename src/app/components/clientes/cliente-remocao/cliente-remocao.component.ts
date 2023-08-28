import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-remocao',
  templateUrl: './cliente-remocao.component.html',
  styleUrls: ['./cliente-remocao.component.css']
})
export class ClienteRemocaoComponent implements OnInit{
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ClientesService
  ) { }

  cliente: Cliente = new Cliente();
  cpf!: string;

  ngOnInit(): void {
    this.cpf = this.route.snapshot.paramMap.get('id') as string;
    this.buscar(this.cpf);
  }

  buscar(cpf: string): void {
    this.service.getClienteApi(cpf).subscribe(resposta => this.cliente = resposta);
  }
  fechar() {
    this.router.navigate(['/clientes']);
  }
  remover() : void {
    this.service.deleteCliente(this.cpf).subscribe(
       {
        complete: () => this.fechar(),
      });
  }
}
